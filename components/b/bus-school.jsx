import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cp03mxf5g.css';
import '../../css/a/aqszcbwbb.css';
import '../../css/f/f7o03acte.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cp03mxf5g"/><circle class="aqszcbwbb"/><circle class="f7o03acte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bus-school"} {...others} />);
}

export default Component;
