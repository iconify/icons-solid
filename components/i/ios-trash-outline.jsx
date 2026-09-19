import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uockbibpw.css';
import '../../css/l/lpkskg0rz.css';
import '../../css/k/ka-x0cbqx.css';
import '../../css/m/mce-y_bwt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uockbibpw"/><path class="lpkskg0rz"/><path class="ka-x0cbqx"/><path class="mce-y_bwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-trash-outline"} {...others} />);
}

export default Component;
