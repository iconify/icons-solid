import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a829lwbpl.css';
import '../../css/n/nk1pwkb6d.css';
import '../../css/h/haixszbjl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a829lwbpl"/><path class="nk1pwkb6d"/><path class="haixszbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lockout-48"} {...others} />);
}

export default Component;
