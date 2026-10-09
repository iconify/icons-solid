import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj89w9bur.css';
import '../../css/n/ndtj57bce.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pj89w9bur"/><path class="ndtj57bce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:silo-48-bold"} {...others} />);
}

export default Component;
