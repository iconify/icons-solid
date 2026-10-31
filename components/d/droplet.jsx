import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/j8o3tllpo.css';
import '../../css/d/d84qwwbzd.css';
import '../../css/f/fx-c5ac8w.css';
import '../../css/b/b8357wzya.css';
import '../../css/g/g8aatkbmq.css';
import '../../css/x/xz6c-nbfo.css';
import '../../css/j/je8y9cc-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="j8o3tllpo"/><path class="d84qwwbzd"/><path class="fx-c5ac8w wm-shine"/><path class="b8357wzya"/><path class="g8aatkbmq"/><path class="xz6c-nbfo"/><path class="je8y9cc-q wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:droplet"} {...others} />);
}

export default Component;
