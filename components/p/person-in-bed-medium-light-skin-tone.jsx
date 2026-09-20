import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd4naybzo.css';
import '../../css/x/xbgwg93cp.css';
import '../../css/u/up-1tpbfk.css';
import '../../css/c/c9-p-mnfz.css';
import '../../css/x/x8t90dqfg.css';
import '../../css/d/dcwheib8u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vd4naybzo"/><path class="xbgwg93cp"/><path class="up-1tpbfk"/><path class="c9-p-mnfz"/><path class="x8t90dqfg"/><path class="dcwheib8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-in-bed-medium-light-skin-tone"} {...others} />);
}

export default Component;
