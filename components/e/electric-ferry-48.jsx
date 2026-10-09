import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbryxcakh.css';
import '../../css/v/ven9i71ui.css';
import '../../css/c/cvs64bbzk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dbryxcakh"/><path class="ven9i71ui"/><path class="cvs64bbzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-ferry-48"} {...others} />);
}

export default Component;
