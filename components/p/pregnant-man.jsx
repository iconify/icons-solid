import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xd2uvqgxd.css';
import '../../css/v/vdaqu21ws.css';
import '../../css/g/g2_pa2vzg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="xd2uvqgxd"/><path class="vdaqu21ws"/><path class="g2_pa2vzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:pregnant-man"} {...others} />);
}

export default Component;
