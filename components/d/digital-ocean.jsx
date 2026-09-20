import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-2i4x0-m.css';
import '../../css/k/k-lsvvbfd.css';
import '../../css/p/pco6t-b8q.css';

const viewBox = {"width":53.927,"height":53.954,"top":-3.954};
const content = `<g class="a-2i4x0-m"><path class="k-lsvvbfd"/><path class="pco6t-b8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:digital-ocean"} {...others} />);
}

export default Component;
