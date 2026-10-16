import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shxbbmbnq.css';
import '../../css/t/t443hym5f.css';
import '../../css/s/sibfjm0-h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="shxbbmbnq"/><path class="t443hym5f"/><path class="sibfjm0-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pelton-wheel-48-bold"} {...others} />);
}

export default Component;
