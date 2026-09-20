import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ps2rzbltq.css';
import '../../css/d/d8ry_7lch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ps2rzbltq"/><path class="d8ry_7lch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-dashed-down-right-box-two-tone"} {...others} />);
}

export default Component;
