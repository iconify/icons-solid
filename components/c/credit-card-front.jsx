import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ziim80_xf.css';
import '../../css/t/thly52bes.css';
import '../../css/t/t0ekv28ky.css';
import '../../css/u/un0m83cyx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="ziim80_xf"/><rect class="thly52bes"/><rect class="t0ekv28ky"/><path class="un0m83cyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:credit-card-front"} {...others} />);
}

export default Component;
