import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6bn8gzzq.css';
import '../../css/y/yo7ggd95z.css';
import '../../css/a/a1qd-mzwk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g6bn8gzzq"/><path class="yo7ggd95z"/><path class="a1qd-mzwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-drag"} {...others} />);
}

export default Component;
