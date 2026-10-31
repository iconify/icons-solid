import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3mdcff1x.css';
import '../../css/p/poax4ybgm.css';
import '../../css/m/m2m306b_n.css';

const viewBox = {"width":301,"height":261};
const content = `<g class="ft5dv1b6b"><path class="s3mdcff1x"/><path class="poax4ybgm"/><path class="m2m306b_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:be"} {...others} />);
}

export default Component;
