import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umia02pax.css';
import '../../css/m/md4i0xbhu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="umia02pax"/><path class="md4i0xbhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thumbs-up-20-bold"} {...others} />);
}

export default Component;
