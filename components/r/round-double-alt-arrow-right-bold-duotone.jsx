import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrdvcwidb.css';
import '../../css/u/uhl-u5b-k.css';
import '../../css/j/jutrygoyf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrdvcwidb"/><path class="uhl-u5b-k"/><path class="jutrygoyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-double-alt-arrow-right-bold-duotone"} {...others} />);
}

export default Component;
