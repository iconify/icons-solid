import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzhwxisqb.css';
import '../../css/w/wvrzkzbvb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pzhwxisqb"/><path class="wvrzkzbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:molten-salt-48-bold"} {...others} />);
}

export default Component;
