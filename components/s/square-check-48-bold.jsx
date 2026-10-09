import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_z88zi0a.css';
import '../../css/g/ga3uofb9d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z_z88zi0a"/><path class="ga3uofb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:square-check-48-bold"} {...others} />);
}

export default Component;
