import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nu2rpabka.css';
import '../../css/e/etcebbbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="nu2rpabka"/><path class="etcebbbkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:smartphone"} {...others} />);
}

export default Component;
