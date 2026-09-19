import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urtzmgbhs.css';
import '../../css/q/q5rhorqnk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="urtzmgbhs"/><path class="q5rhorqnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:eye-off-outline"} {...others} />);
}

export default Component;
