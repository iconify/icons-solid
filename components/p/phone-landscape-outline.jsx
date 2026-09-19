import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8xwu9g6i.css';
import '../../css/x/xd6k6-cyk.css';

const viewBox = {"width":512,"height":512};
const content = `<rect transform="rotate(-90 256 256)" class="s8xwu9g6i"/><path class="xd6k6-cyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:phone-landscape-outline"} {...others} />);
}

export default Component;
