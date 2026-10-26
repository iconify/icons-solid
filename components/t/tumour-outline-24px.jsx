import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rh1136bzs.css';
import '../../css/u/ud-z92y1b.css';
import '../../css/d/d0o4gmbsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rh1136bzs"/><path clip-rule="evenodd" class="ud-z92y1b"/><path class="d0o4gmbsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:tumour-outline-24px"} {...others} />);
}

export default Component;
