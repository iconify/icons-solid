import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4bw4gbbn.css';
import '../../css/c/czndeu-mt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l4bw4gbbn"/><path class="czndeu-mt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:magnet"} {...others} />);
}

export default Component;
