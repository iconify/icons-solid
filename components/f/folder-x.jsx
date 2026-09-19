import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eap06jblr.css';
import '../../css/q/q-j3uhb1m.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="eap06jblr"/><path class="q-j3uhb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:folder-x"} {...others} />);
}

export default Component;
