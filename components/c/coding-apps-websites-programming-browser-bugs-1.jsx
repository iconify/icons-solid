import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd2hwobky.css';
import '../../css/v/vh3o_db4k.css';
import '../../css/h/hhx3qrbhk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vd2hwobky"/><path class="vh3o_db4k"/><path class="hhx3qrbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-programming-browser-bugs-1"} {...others} />);
}

export default Component;
