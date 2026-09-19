import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/udt_089ya.css';
import '../../css/g/gj8qz0jcg.css';
import '../../css/t/tbt_cbc6x.css';
import '../../css/c/c6ffpibmk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="udt_089ya"/><path class="gj8qz0jcg"/><path class="tbt_cbc6x"/><path class="c6ffpibmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-wrestling"} {...others} />);
}

export default Component;
