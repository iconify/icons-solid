import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u42z6638m.css';
import '../../css/z/zy_ves9iz.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><rect class="u42z6638m"/><path class="zy_ves9iz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-box-double-stroke-12"} {...others} />);
}

export default Component;
