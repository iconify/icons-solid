import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8nk3d6-m.css';
import '../../css/d/dn656gbyk.css';
import '../../css/f/fkm6ccb_r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="v8nk3d6-m"/><path class="dn656gbyk"/><path class="fkm6ccb_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:post-office"} {...others} />);
}

export default Component;
