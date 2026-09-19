import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btx30rb9t.css';
import '../../css/y/yia-2dsuc.css';
import '../../css/c/c5bu1vb6m.css';
import '../../css/y/yjthzmayw.css';
import '../../css/j/ji4g8__um.css';
import '../../css/k/kx2v4jb_r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="btx30rb9t"><path class="yia-2dsuc"/><path class="c5bu1vb6m"/><path class="yjthzmayw"/><path class="ji4g8__um"/><path class="kx2v4jb_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gymnastics-one"} {...others} />);
}

export default Component;
