import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fm5qzvb4m.css';
import '../../css/u/ulbuw7bda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="fm5qzvb4m wm-k"/><path class="ulbuw7bda wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plum-blossom-gloss"} {...others} />);
}

export default Component;
