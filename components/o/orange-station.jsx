import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkop8ti_r.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="gkop8ti_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:orange-station"} {...others} />);
}

export default Component;
