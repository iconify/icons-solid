import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0rf3fb-u.css';
import '../../css/s/s_gjiybtk.css';
import '../../css/v/v3cog_bvy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o0rf3fb-u"/><path class="s_gjiybtk"/><path class="v3cog_bvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-direction-48"} {...others} />);
}

export default Component;
