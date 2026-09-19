import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orjn0-yiw.css';
import '../../css/j/jir5wfbda.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="orjn0-yiw"/><path class="jir5wfbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:toggle-filled"} {...others} />);
}

export default Component;
