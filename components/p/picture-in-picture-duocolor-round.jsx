import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fnlr2lbrq.css';
import '../../css/l/l13qv277c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fnlr2lbrq"/><path class="l13qv277c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:picture-in-picture-duocolor-round"} {...others} />);
}

export default Component;
