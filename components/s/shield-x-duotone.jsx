import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-dgvv46o.css';
import '../../css/e/e53pcbn_d.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="a-dgvv46o"/><path class="e53pcbn_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:shield-x-duotone"} {...others} />);
}

export default Component;
