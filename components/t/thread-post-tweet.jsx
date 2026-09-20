import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fuo_uxhen.css';
import '../../css/k/kzirggbni.css';
import '../../css/q/qbyu46zlw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="fuo_uxhen"/><path class="kzirggbni"/><path class="qbyu46zlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:thread-post-tweet"} {...others} />);
}

export default Component;
