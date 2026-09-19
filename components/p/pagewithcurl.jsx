import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzdetfb7j.css';
import '../../css/w/w8qy4b3yq.css';
import '../../css/r/r83kv-bnq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jzdetfb7j"/><path class="w8qy4b3yq"/><path class="r83kv-bnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pagewithcurl"} {...others} />);
}

export default Component;
