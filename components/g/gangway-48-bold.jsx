import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt1i9cb7l.css';
import '../../css/x/xf50wgb4t.css';
import '../../css/t/tb4njgoat.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xt1i9cb7l"/><path class="xf50wgb4t"/><path class="tb4njgoat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gangway-48-bold"} {...others} />);
}

export default Component;
