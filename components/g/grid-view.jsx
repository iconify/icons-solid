import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsjdrqwxo.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG1oNpLdAj" class="tsjdrqwxo"/></defs><g class="ft5dv1b6b"><use href="#SVG1oNpLdAj"/><use href="#SVG1oNpLdAj" class="p_3zmsvya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:grid-view"} {...others} />);
}

export default Component;
