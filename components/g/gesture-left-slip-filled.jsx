import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ont_ilb1y.css';
import '../../css/u/ua3nsqb7g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ont_ilb1y"/><path class="ua3nsqb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:gesture-left-slip-filled"} {...others} />);
}

export default Component;
