import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m5gr2acru.css';
import '../../css/l/lef_8ib5h.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="m5gr2acru"/><rect class="lef_8ib5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:thumbs-up-stroke-16"} {...others} />);
}

export default Component;
