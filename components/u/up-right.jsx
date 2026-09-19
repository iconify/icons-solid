import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv2l5-hbm.css';
import '../../css/j/jw1hfib5l.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGVLcjBd1s" class="tv2l5-hbm"/><path id="SVGhvPpKd0d" class="jw1hfib5l"/></defs><use href="#SVGVLcjBd1s"/><use href="#SVGhvPpKd0d"/><use href="#SVGVLcjBd1s"/><use href="#SVGhvPpKd0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:up-right"} {...others} />);
}

export default Component;
