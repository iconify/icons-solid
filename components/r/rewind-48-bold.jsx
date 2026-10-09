import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3pwufbep.css';
import '../../css/i/ifs4a46sv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v3pwufbep"/><path class="ifs4a46sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rewind-48-bold"} {...others} />);
}

export default Component;
