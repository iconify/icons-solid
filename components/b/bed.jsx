import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd4naybzo.css';
import '../../css/x/xbgwg93cp.css';
import '../../css/o/okog-dblc.css';
import '../../css/n/n11xj6b_f.css';
import '../../css/f/f8hyhhxyq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vd4naybzo"/><path class="xbgwg93cp"/><path class="okog-dblc"/><path class="n11xj6b_f"/><path class="f8hyhhxyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bed"} {...others} />);
}

export default Component;
