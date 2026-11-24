import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b717o-bps.css';
import '../../css/g/gigg_sbik.css';
import '../../css/s/supxy0b7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b717o-bps"/><path class="gigg_sbik"/><path class="supxy0b7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:house-arrow-left-filled"} {...others} />);
}

export default Component;
