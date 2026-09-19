import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fyc9_fbub.css';
import '../../css/n/nxclh67wn.css';
import '../../css/w/w0wtj8boi.css';
import '../../css/m/mgyhsryxo.css';
import '../../css/p/pe592cbgh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="fyc9_fbub"/><path class="nxclh67wn"/><path class="w0wtj8boi"/><path class="mgyhsryxo"/><path clip-rule="evenodd" class="pe592cbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:monorail"} {...others} />);
}

export default Component;
