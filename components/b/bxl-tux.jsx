import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oamm76ujh.css';
import '../../css/i/i72iigb4y.css';
import '../../css/z/zfyv2h51a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oamm76ujh"/><path class="i72iigb4y"/><path class="zfyv2h51a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-tux"} {...others} />);
}

export default Component;
