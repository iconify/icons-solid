import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aqfch74uv.css';
import '../../css/s/sg81q-vci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aqfch74uv"/><path class="sg81q-vci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:door-open-two-tone"} {...others} />);
}

export default Component;
