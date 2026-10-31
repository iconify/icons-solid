import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/og3vf3u0p.css';
import '../../css/a/a2n2tzl8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="og3vf3u0p"/><path class="a2n2tzl8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pen-tool-duocolor-round"} {...others} />);
}

export default Component;
