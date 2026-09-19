import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jaon458pj.css';
import '../../css/c/c7tztfx7u.css';
import '../../css/l/lrj2ovb2v.css';
import '../../css/v/vqdvl_bsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><g class="d2kvgvbvc"><path class="jaon458pj"/><path class="c7tztfx7u"/><path class="lrj2ovb2v"/><path class="vqdvl_bsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:debugger"} {...others} />);
}

export default Component;
