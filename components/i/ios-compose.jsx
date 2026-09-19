import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptdinhqmn.css';
import '../../css/m/m5swtfbed.css';
import '../../css/z/zyduq6bqi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ptdinhqmn"/><path class="m5swtfbed"/><path class="zyduq6bqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-compose"} {...others} />);
}

export default Component;
