import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpd_n5uta.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kpd_n5uta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:full-metal-bucket"} {...others} />);
}

export default Component;
