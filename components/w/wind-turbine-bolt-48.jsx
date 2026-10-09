import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3kxc0e1n.css';
import '../../css/y/y8netlxfj.css';
import '../../css/f/foaw4bimw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i3kxc0e1n"/><path class="y8netlxfj"/><path class="foaw4bimw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-bolt-48"} {...others} />);
}

export default Component;
