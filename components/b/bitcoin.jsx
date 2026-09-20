import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9kihqb-w.css';
import '../../css/y/y37rc1b4k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z9kihqb-w"/><path class="y37rc1b4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bitcoin"} {...others} />);
}

export default Component;
