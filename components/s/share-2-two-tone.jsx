import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lzkyqsb1b.css';
import '../../css/v/vexzqqb8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lzkyqsb1b"/><path class="vexzqqb8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:share-2-two-tone"} {...others} />);
}

export default Component;
