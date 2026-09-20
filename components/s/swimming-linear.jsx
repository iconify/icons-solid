import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yz9__bc6c.css';
import '../../css/v/v30dxydpm.css';
import '../../css/u/uoxjs6bit.css';
import '../../css/i/in-q1r46k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yz9__bc6c"/><path class="v30dxydpm"/><path class="uoxjs6bit"/><path class="in-q1r46k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:swimming-linear"} {...others} />);
}

export default Component;
