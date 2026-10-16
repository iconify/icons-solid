import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8nc87u9j.css';
import '../../css/w/w7okmzx7d.css';
import '../../css/k/kxc6azbrd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z8nc87u9j"/><path class="w7okmzx7d"/><path class="kxc6azbrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-blending-48"} {...others} />);
}

export default Component;
