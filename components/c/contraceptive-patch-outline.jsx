import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kiaki0bgb.css';
import '../../css/t/t-lnjbcre.css';
import '../../css/g/g4sr6mdva.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kiaki0bgb"/><path clip-rule="evenodd" class="t-lnjbcre"/><path class="g4sr6mdva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contraceptive-patch-outline"} {...others} />);
}

export default Component;
