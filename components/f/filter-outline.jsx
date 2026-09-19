import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vaf72r2iq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="filter-outline"><path class="(Stroke) 38 Vector vaf72r2iq" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:filter-outline"} {...others} />);
}

export default Component;
