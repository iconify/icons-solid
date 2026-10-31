import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nqqqpab0e.css';
import '../../css/o/ol3jf_bij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nqqqpab0e"/><path class="ol3jf_bij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:store-duocolor-round"} {...others} />);
}

export default Component;
