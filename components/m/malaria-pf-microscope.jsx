import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rf6i3943p.css';
import '../../css/o/o8ta-ebdt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="rf6i3943p"/><path clip-rule="evenodd" class="o8ta-ebdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:malaria-pf-microscope"} {...others} />);
}

export default Component;
