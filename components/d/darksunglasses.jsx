import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2w7w-b-w.css';
import '../../css/q/q49xs08qd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z2w7w-b-w"/><path class="q49xs08qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:darksunglasses"} {...others} />);
}

export default Component;
