import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h4umnu5lv.css';
import '../../css/e/earr4i8do.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="h4umnu5lv"/><path clip-rule="evenodd" class="earr4i8do"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:headphones-slash-20-solid"} {...others} />);
}

export default Component;
