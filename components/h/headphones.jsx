import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f-ymhebge.css';
import '../../css/q/q1-8fubvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f-ymhebge"/><path class="q1-8fubvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:headphones"} {...others} />);
}

export default Component;
