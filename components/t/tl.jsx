import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmggirfyq.css';
import '../../css/d/d-5fc0ryw.css';
import '../../css/o/o-cne-k-k.css';
import '../../css/e/ehn2nbutb.css';

const viewBox = {"width":300,"height":150};
const content = `<g class="ft5dv1b6b"><path class="bmggirfyq"/><path class="d-5fc0ryw"/><path class="o-cne-k-k"/><path class="ehn2nbutb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tl"} {...others} />);
}

export default Component;
