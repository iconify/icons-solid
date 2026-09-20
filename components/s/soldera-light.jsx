import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs097sx9w.css';
import '../../css/h/hjoxasqzl.css';
import '../../css/a/a3esp_bqf.css';
import '../../css/k/k7ktcccae.css';

const viewBox = {"width":328,"height":319};
const content = `<g class="gs097sx9w"><path class="hjoxasqzl"/><path class="a3esp_bqf"/><path class="k7ktcccae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:soldera-light"} {...others} />);
}

export default Component;
