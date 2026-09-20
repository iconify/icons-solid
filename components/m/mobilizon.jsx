import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b17oeotjk.css';
import '../../css/a/ad5qjploe.css';
import '../../css/l/lvcq9zb7u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b17oeotjk"/><path class="ad5qjploe"/><path class="lvcq9zb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mobilizon"} {...others} />);
}

export default Component;
