import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6wh3497s.css';
import '../../css/z/zcfsn21nh.css';
import '../../css/z/zsn_dkb-f.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/p/prgx4tbuc.css';
import '../../css/y/yt42wrtkz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z6wh3497s"/><path class="zcfsn21nh"/><path class="zsn_dkb-f"/><g class="jn8qy4bru"><path class="prgx4tbuc"/><path class="yt42wrtkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:euro-banknote"} {...others} />);
}

export default Component;
