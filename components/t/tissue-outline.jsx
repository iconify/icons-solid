import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y-ryz0bgv.css';
import '../../css/h/hsarnmb2i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="y-ryz0bgv"/><path clip-rule="evenodd" class="hsarnmb2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:tissue-outline"} {...others} />);
}

export default Component;
