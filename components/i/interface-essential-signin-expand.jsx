import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayneljb8k.css';
import '../../css/u/u7z6scc3l.css';
import '../../css/s/su6j1bbgd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ayneljb8k"/><path class="u7z6scc3l"/><path class="su6j1bbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-signin-expand"} {...others} />);
}

export default Component;
