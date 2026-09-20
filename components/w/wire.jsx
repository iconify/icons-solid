import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scc50pnyt.css';
import '../../css/w/wgfto0gvm.css';
import '../../css/i/i0im9gb4o.css';
import '../../css/o/oyapxxb1h.css';
import '../../css/h/h1tlmbc9r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="scc50pnyt"/><path class="wgfto0gvm"/><path class="i0im9gb4o"/><path class="oyapxxb1h"/><path class="h1tlmbc9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wire"} {...others} />);
}

export default Component;
