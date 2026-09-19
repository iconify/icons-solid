import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-u4xnbot.css';
import '../../css/o/oa5_b0b8m.css';
import '../../css/z/zq-0s9biw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m-u4xnbot"/><path class="oa5_b0b8m"/><path class="zq-0s9biw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:navaid-dme"} {...others} />);
}

export default Component;
