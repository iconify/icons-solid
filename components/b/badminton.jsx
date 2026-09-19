import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2ckn6b6y.css';
import '../../css/c/c2nzw5bgb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="m2ckn6b6y"/><path class="c2nzw5bgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:badminton"} {...others} />);
}

export default Component;
