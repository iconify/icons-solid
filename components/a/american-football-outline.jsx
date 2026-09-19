import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4asfxowo.css';
import '../../css/x/xqkp-ixqi.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse transform="rotate(-45 256 256.002)" class="p4asfxowo"/><path class="xqkp-ixqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:american-football-outline"} {...others} />);
}

export default Component;
