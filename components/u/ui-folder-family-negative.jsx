import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dv179xopj.css';
import '../../css/w/wl0yr8bgj.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsUiFolderFamilyNegative0)" class="cuyn6tgcc"><path class="dv179xopj"/><path clip-rule="evenodd" class="wl0yr8bgj"/></g><defs><clipPath id="healthiconsUiFolderFamilyNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ui-folder-family-negative"} {...others} />);
}

export default Component;
