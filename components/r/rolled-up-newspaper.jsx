import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhfwtrbxt.css';
import '../../css/n/nss89dbky.css';
import '../../css/c/cg5zfwbsc.css';
import '../../css/c/ct5u8-gbb.css';
import '../../css/b/bxct3lawn.css';
import '../../css/f/f238yfbnt.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/wro7qgbon.css';
import '../../css/w/w0lp0lb9w.css';
import '../../css/i/ilucglv5g.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jhfwtrbxt"/><path class="nss89dbky"/><path class="cg5zfwbsc"/><path class="ct5u8-gbb"/><path class="bxct3lawn"/><path class="f238yfbnt"/><g class="jn8qy4bru"><path class="wro7qgbon"/><path class="w0lp0lb9w"/><path class="ilucglv5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rolled-up-newspaper"} {...others} />);
}

export default Component;
