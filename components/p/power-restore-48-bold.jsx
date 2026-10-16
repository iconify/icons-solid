import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9rw-n5ub.css';
import '../../css/j/jfwsknlsh.css';
import '../../css/v/vqjgpvl-i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a9rw-n5ub"/><path class="jfwsknlsh"/><path class="vqjgpvl-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-restore-48-bold"} {...others} />);
}

export default Component;
