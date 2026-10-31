import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z25utjbxh.css';
import '../../css/j/jnr3bwb1w.css';
import '../../css/m/mrlvhobyb.css';
import '../../css/w/wcksz9bqg.css';
import '../../css/p/pfdr2obfh.css';
import '../../css/d/dq-5c2boh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z25utjbxh"/><path class="jnr3bwb1w"/><path class="mrlvhobyb"/><path class="wcksz9bqg"/><path class="pfdr2obfh"/><path class="dq-5c2boh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cloud-moon"} {...others} />);
}

export default Component;
