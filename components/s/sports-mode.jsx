import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwvv-yb1g.css';
import '../../css/s/s7_2r_b_x.css';
import '../../css/k/k34urac1b.css';
import '../../css/o/ojzec6byi.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="uwvv-yb1g"/><path class="s7_2r_b_x"/><path class="k34urac1b"/><path class="ojzec6byi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:sports-mode"} {...others} />);
}

export default Component;
