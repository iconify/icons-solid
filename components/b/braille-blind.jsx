import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6dt-4bwi.css';
import '../../css/u/uf5xnac0z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="d6dt-4bwi"/><path class="uf5xnac0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:braille-blind"} {...others} />);
}

export default Component;
