import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lep9zokjs.css';
import '../../css/j/j61r-5cyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lep9zokjs"/><path class="j61r-5cyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-squares-two-tone"} {...others} />);
}

export default Component;
