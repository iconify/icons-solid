import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xz_eqbhss.css';
import '../../css/t/t0a56hb1v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xz_eqbhss"/><path class="t0a56hb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:leaf-duo"} {...others} />);
}

export default Component;
