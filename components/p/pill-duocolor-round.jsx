import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fee-8zjmr.css';
import '../../css/v/vbtgc8bua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fee-8zjmr"/><path class="vbtgc8bua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pill-duocolor-round"} {...others} />);
}

export default Component;
