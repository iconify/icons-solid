import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c__7q5bmw.css';
import '../../css/r/rknde7bur.css';
import '../../css/b/b209fsbmb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c__7q5bmw"/><path class="rknde7bur"/><path class="b209fsbmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:womenssymbol"} {...others} />);
}

export default Component;
