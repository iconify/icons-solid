import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9rpk5b8h.css';
import '../../css/y/yt58xlb7j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f9rpk5b8h"/><path class="yt58xlb7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-apple-outline"} {...others} />);
}

export default Component;
