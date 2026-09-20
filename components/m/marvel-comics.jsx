import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1hf7ra_v.css';
import '../../css/q/q-5942h8d.css';
import '../../css/o/oee3yubwn.css';
import '../../css/v/vfdbpzmvh.css';
import '../../css/z/z26m3cbrs.css';
import '../../css/e/e5zbnjg5v.css';

const viewBox = {"width":160.817,"height":35.814};
const content = `<g transform="translate(-20.758 -127.783)" class="r1hf7ra_v"><path class="q-5942h8d"/><path class="oee3yubwn"/><rect class="vfdbpzmvh"/><rect class="z26m3cbrs"/><path class="e5zbnjg5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:marvel-comics"} {...others} />);
}

export default Component;
