import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mjkvh7bky.css';
import '../../css/e/eusfqkb9k.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="mjkvh7bky"/><path class="eusfqkb9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:link"} {...others} />);
}

export default Component;
