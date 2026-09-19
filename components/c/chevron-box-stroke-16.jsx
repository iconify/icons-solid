import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/ph1s97tzl.css';
import '../../css/l/lj9dz4bjd.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><rect class="ph1s97tzl"/><path class="lj9dz4bjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:chevron-box-stroke-16"} {...others} />);
}

export default Component;
