import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/h/had8q-s7j.css';
import '../../css/t/te9g7bbon.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="had8q-s7j"/><path class="te9g7bbon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:histogram"} {...others} />);
}

export default Component;
