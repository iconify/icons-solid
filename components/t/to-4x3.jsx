import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/n/n53hu8xtg.css';
import '../../css/k/kux23acru.css';
import '../../css/i/iw2ko0b_c.css';
import '../../css/w/wtj0htkdo.css';
import '../../css/v/v34eu8bxj.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="n53hu8xtg"/><path class="kux23acru"/><g class="iw2ko0b_c"><path class="wtj0htkdo"/><path class="v34eu8bxj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:to-4x3"} {...others} />);
}

export default Component;
