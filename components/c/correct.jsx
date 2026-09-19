import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh3sju-sz.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="rh3sju-sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:correct"} {...others} />);
}

export default Component;
