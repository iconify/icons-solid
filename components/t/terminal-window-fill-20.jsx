import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzmt377rd.css';
import '../../css/o/oreh4pgns.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lzmt377rd"/><path class="oreh4pgns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:terminal-window-fill-20"} {...others} />);
}

export default Component;
