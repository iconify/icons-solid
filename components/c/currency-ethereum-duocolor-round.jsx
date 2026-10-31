import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j8-lmv0qm.css';
import '../../css/s/slrrf6ejp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j8-lmv0qm"/><path class="slrrf6ejp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-ethereum-duocolor-round"} {...others} />);
}

export default Component;
