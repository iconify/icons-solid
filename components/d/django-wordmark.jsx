import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zonfagdaq.css';
import '../../css/l/l4bkd6ycw.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="zonfagdaq"/><path class="l4bkd6ycw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:django-wordmark"} {...others} />);
}

export default Component;
