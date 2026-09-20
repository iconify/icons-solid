import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6t-z_b5j.css';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bespbwbxk.css';
import '../../css/c/cb83iko7x.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGmBpWHckD" class="l6t-z_b5j"/></defs><g class="in9d5ac6n"><use href="#SVGmBpWHckD"/><use href="#SVGmBpWHckD"/><path class="bespbwbxk"/><path class="cb83iko7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:airplane-disabled"} {...others} />);
}

export default Component;
