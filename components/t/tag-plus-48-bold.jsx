import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duw3yoprz.css';
import '../../css/p/psd5yeurc.css';
import '../../css/l/l9jgh7bvz.css';
import '../../css/s/st45emjbc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="duw3yoprz"/><path class="psd5yeurc"/><path class="l9jgh7bvz"/><path class="st45emjbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tag-plus-48-bold"} {...others} />);
}

export default Component;
