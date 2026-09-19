import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwhq_1bfc.css';
import '../../css/s/s0kb75b8z.css';
import '../../css/z/zyduq6bqi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mwhq_1bfc"/><path class="s0kb75b8z"/><path class="zyduq6bqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-compose-outline"} {...others} />);
}

export default Component;
