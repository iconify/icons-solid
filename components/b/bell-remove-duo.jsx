import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlaso0bdo.css';
import '../../css/u/ub71xqbpj.css';
import '../../css/u/utr6ahyvf.css';
import '../../css/e/ec919wzkd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nlaso0bdo"/><path class="ub71xqbpj"/><path class="utr6ahyvf"/><path class="ec919wzkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bell-remove-duo"} {...others} />);
}

export default Component;
