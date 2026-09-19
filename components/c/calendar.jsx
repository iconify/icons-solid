import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxb6bgbsy.css';
import '../../css/t/tyb07sbbq.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="gxb6bgbsy"/><path class="tyb07sbbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:calendar"} {...others} />);
}

export default Component;
