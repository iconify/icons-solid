import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ta31eq_6z.css';
import '../../css/t/tyki2lbul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ta31eq_6z"/><path class="tyki2lbul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bar-chart-two-tone"} {...others} />);
}

export default Component;
