import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_3xo-zcn.css';
import '../../css/f/fy8hrfkoj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g_3xo-zcn"/><path class="fy8hrfkoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:skyscraper-48-bold"} {...others} />);
}

export default Component;
