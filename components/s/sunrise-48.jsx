import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-taz-bdu.css';
import '../../css/f/ftnl01noy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p-taz-bdu"/><path class="ftnl01noy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sunrise-48"} {...others} />);
}

export default Component;
