import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1kzsmy6e.css';
import '../../css/b/bjwi9bbqs.css';
import '../../css/k/kk0vjob3o.css';
import '../../css/j/jas2y1bjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x1kzsmy6e"/><path clip-rule="evenodd" class="bjwi9bbqs"/><path class="kk0vjob3o"/><path class="jas2y1bjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:apple-scan"} {...others} />);
}

export default Component;
