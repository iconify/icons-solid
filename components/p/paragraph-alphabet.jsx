import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ci_5ps2ie.css';
import '../../css/n/n_1zx5yzm.css';
import '../../css/t/tvwrrkg1q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ci_5ps2ie"/><path class="n_1zx5yzm"/><path class="tvwrrkg1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:paragraph-alphabet"} {...others} />);
}

export default Component;
