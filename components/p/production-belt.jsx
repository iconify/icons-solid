import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wncidlq5z.css';
import '../../css/i/im2v0lb7x.css';
import '../../css/b/bs4snbtek.css';
import '../../css/j/jelzkkbrx.css';
import '../../css/y/ym5zm3bhw.css';
import '../../css/n/nx2vqobau.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wncidlq5z"/><path class="im2v0lb7x"/><path class="bs4snbtek"/><path class="jelzkkbrx"/><path class="ym5zm3bhw"/><path class="nx2vqobau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:production-belt"} {...others} />);
}

export default Component;
