import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hgcm0ub4q.css';
import '../../css/f/ffn14m8tb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hgcm0ub4q"/><path class="ffn14m8tb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:type-outline-two-tone"} {...others} />);
}

export default Component;
