import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnd46w4ky.css';
import '../../css/v/vq6m2jkdl.css';
import '../../css/o/o9fj8l03y.css';
import '../../css/c/cjy_2dbqf.css';
import '../../css/l/lrzzm5bki.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nnd46w4ky"><path class="vq6m2jkdl"/><path class="o9fj8l03y"/></g><g class="nnd46w4ky"><path class="cjy_2dbqf"/><path class="lrzzm5bki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:refresh"} {...others} />);
}

export default Component;
