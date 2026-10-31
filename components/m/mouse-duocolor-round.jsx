import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a4f92acjz.css';
import '../../css/p/pyjtflbpf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a4f92acjz"/><path class="pyjtflbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mouse-duocolor-round"} {...others} />);
}

export default Component;
