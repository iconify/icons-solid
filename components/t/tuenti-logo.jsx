import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/p05fx7dxw.css';
import '../../css/n/nth_bib9h.css';
import '../../css/j/j7su0kpmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="p05fx7dxw"/><path class="nth_bib9h"/><path class="j7su0kpmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:tuenti-logo"} {...others} />);
}

export default Component;
