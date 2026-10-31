import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ycvtv5baz.css';
import '../../css/a/aaujph9kg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ycvtv5baz"/><path class="aaujph9kg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:star-half-duocolor-round"} {...others} />);
}

export default Component;
