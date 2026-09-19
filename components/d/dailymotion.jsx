import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1vt4ejsn.css';
import '../../css/w/wig593f0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o1vt4ejsn"/><path class="wig593f0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:dailymotion"} {...others} />);
}

export default Component;
