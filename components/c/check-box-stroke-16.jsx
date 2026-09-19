import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/ate314u0h.css';
import '../../css/o/oc5n1bb4u.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><rect class="ate314u0h"/><path class="oc5n1bb4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-box-stroke-16"} {...others} />);
}

export default Component;
