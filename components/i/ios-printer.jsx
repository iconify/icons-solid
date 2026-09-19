import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8kv0lb4e.css';
import '../../css/p/p_echrb7k.css';
import '../../css/i/ilk47r1wz.css';
import '../../css/m/m9jrbcbdh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r8kv0lb4e"/><path class="p_echrb7k"/><path class="ilk47r1wz"/><path class="m9jrbcbdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-printer"} {...others} />);
}

export default Component;
