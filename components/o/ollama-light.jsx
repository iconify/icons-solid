import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iycln-b8i.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/y/y02hk3jmi.css';
import '../../css/s/samcq3xfd.css';
import '../../css/m/m9vsufp9g.css';
import '../../css/u/udmajcboi.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><circle id="SVG1g8rabco" class="iycln-b8i"/></defs><clipPath id="SVGJdal8dOW"><use href="#SVG1g8rabco"/></clipPath><g clip-path="url(#SVGJdal8dOW)" class="n1mjunbsu"><path class="y02hk3jmi"/><path class="samcq3xfd"/><path class="m9vsufp9g"/><path class="udmajcboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ollama-light"} {...others} />);
}

export default Component;
