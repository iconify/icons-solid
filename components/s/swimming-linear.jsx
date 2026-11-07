import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gzan0ibzy.css';
import '../../css/z/z30q42-xr.css';
import '../../css/u/uoxjs6bit.css';
import '../../css/a/at_81ebpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gzan0ibzy"/><path class="z30q42-xr"/><path class="uoxjs6bit"/><path class="at_81ebpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:swimming-linear"} {...others} />);
}

export default Component;
