import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftzv30bdn.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/z/z0g4ho11v.css';
import '../../css/y/y3as5g29k.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/g/ghoe69blg.css';
import '../../css/a/afmrrybzt.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGAMcFQeBF" class="ftzv30bdn"/></defs><use href="#SVGAMcFQeBF" class="dcqdxh5zc"/><rect transform="rotate(-45 23.516 37.78)" class="z0g4ho11v"/><use href="#SVGAMcFQeBF" class="y3as5g29k"/><g class="kdz4acc8r"><rect transform="rotate(-45 23.516 37.78)" class="ghoe69blg"/><path class="afmrrybzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:firecracker"} {...others} />);
}

export default Component;
