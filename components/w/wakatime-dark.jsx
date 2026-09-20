import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csw0kbbpv.css';
import '../../css/w/wf15_9b8y.css';
import '../../css/q/qiau4mbbk.css';

const viewBox = {"width":340,"height":340};
const content = `<g class="csw0kbbpv"><path clip-rule="evenodd" class="wf15_9b8y"/><path class="qiau4mbbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:wakatime-dark"} {...others} />);
}

export default Component;
