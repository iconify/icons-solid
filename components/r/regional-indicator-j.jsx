import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwico__yj.css';
import '../../css/h/htu6zoakn.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGREWbgcXm" class="jwico__yj"/></defs><circle class="htu6zoakn"/><use href="#SVGREWbgcXm"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><use href="#SVGREWbgcXm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:regional-indicator-j"} {...others} />);
}

export default Component;
