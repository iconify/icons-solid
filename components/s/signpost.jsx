import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcbnmxbuj.css';
import '../../css/r/rsf38h_ot.css';
import '../../css/g/gd4hxebuc.css';
import '../../css/i/isqiaxawv.css';
import '../../css/k/ksextccsb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mcbnmxbuj"/><path class="rsf38h_ot"/><path class="gd4hxebuc"/><path class="isqiaxawv"/><path class="ksextccsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:signpost"} {...others} />);
}

export default Component;
