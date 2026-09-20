import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p17ncey3b.css';
import '../../css/l/lz667430k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p17ncey3b"/><path class="lz667430k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:forte"} {...others} />);
}

export default Component;
