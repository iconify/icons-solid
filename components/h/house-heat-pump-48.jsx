import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvggpac7z.css';
import '../../css/d/ddeq6kb3m.css';
import '../../css/s/sc9dz5b-p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvggpac7z"/><path class="ddeq6kb3m"/><path class="sc9dz5b-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-heat-pump-48"} {...others} />);
}

export default Component;
