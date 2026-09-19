import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcih8ij8j.css';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o-esvy8uf.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGpjjbzJlK" class="lcih8ij8j"/></defs><g class="nz_20wbpz"><use href="#SVGpjjbzJlK"/><use href="#SVGpjjbzJlK"/><path class="o-esvy8uf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:refraction"} {...others} />);
}

export default Component;
