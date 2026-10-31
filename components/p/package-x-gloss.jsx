import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/umr78d98g.css';
import '../../css/b/bfe2wcasz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="umr78d98g wm-k"/><path class="bfe2wcasz wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-x-gloss"} {...others} />);
}

export default Component;
