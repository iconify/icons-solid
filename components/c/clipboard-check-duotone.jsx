import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e5s5re2ex.css';
import '../../css/c/cm6xdqnil.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="e5s5re2ex"/><path class="cm6xdqnil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:clipboard-check-duotone"} {...others} />);
}

export default Component;
