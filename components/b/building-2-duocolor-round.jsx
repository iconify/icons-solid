import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iklqjqbvt.css';
import '../../css/q/q73c0pb0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iklqjqbvt"/><path class="q73c0pb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-2-duocolor-round"} {...others} />);
}

export default Component;
