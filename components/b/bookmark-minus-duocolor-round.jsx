import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tfw3n8bht.css';
import '../../css/m/mt-25jbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tfw3n8bht"/><path class="mt-25jbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bookmark-minus-duocolor-round"} {...others} />);
}

export default Component;
