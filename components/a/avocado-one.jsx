import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/u25_k1blb.css';
import '../../css/w/w-e9scb0e.css';
import '../../css/t/t6zhvfh4h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="u25_k1blb"/><path class="w-e9scb0e"/><path class="t6zhvfh4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:avocado-one"} {...others} />);
}

export default Component;
