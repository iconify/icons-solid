import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8c7mwbrw.css';
import '../../css/w/wm5561bcz.css';
import '../../css/i/i8xqukhzb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n8c7mwbrw"/><path class="wm5561bcz"/><path class="i8xqukhzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:split-20"} {...others} />);
}

export default Component;
