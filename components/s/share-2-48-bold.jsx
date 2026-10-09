import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um4cf3bps.css';
import '../../css/g/g2l6abblz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="um4cf3bps"/><path class="g2l6abblz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:share-2-48-bold"} {...others} />);
}

export default Component;
