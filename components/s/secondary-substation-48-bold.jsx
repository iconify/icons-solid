import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-krkroqv.css';
import '../../css/m/mvm0xqozd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d-krkroqv"/><path class="mvm0xqozd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:secondary-substation-48-bold"} {...others} />);
}

export default Component;
