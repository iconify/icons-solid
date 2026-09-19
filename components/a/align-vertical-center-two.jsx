import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwp_z2i8h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mwp_z2i8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:align-vertical-center-two"} {...others} />);
}

export default Component;
