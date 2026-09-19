import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fi_h3obyz.css';
import '../../css/i/ie7ewgb8j.css';
import '../../css/i/iupmgbczu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fi_h3obyz"/><path clip-rule="evenodd" class="ie7ewgb8j"/><path class="iupmgbczu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:file-doc-solid"} {...others} />);
}

export default Component;
