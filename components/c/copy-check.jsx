import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sahedmvmv.css';
import '../../css/t/t32byfbar.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="sahedmvmv"/><path clip-rule="evenodd" class="t32byfbar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:copy-check"} {...others} />);
}

export default Component;
