import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/v/vhy3w_n5f.css';
import '../../css/u/u0lxksm7a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="vhy3w_n5f"/><path class="u0lxksm7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-circle-left-48"} {...others} />);
}

export default Component;
