import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zyqlyotss.css';
import '../../css/a/a7agso4ey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zyqlyotss"/><path class="a7agso4ey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-waterfall-duocolor-round"} {...others} />);
}

export default Component;
