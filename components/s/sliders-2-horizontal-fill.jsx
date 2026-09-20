import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h181z6xlz.css';
import '../../css/d/d8dm5piln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h181z6xlz"/><path class="d8dm5piln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sliders-2-horizontal-fill"} {...others} />);
}

export default Component;
