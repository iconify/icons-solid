import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8q-w6eqy.css';
import '../../css/s/s09cx1bfa.css';
import '../../css/y/y3oshe5zq.css';
import '../../css/v/v2hoeky5j.css';
import '../../css/u/u4vzekoup.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q8q-w6eqy wm-a"/><path class="s09cx1bfa wm-a"/><path class="wm-k y3oshe5zq"/><path class="v2hoeky5j wm-a"/><path class="u4vzekoup wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bot-off"} {...others} />);
}

export default Component;
