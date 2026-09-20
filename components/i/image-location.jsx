import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohl3wd6qt.css';
import '../../css/y/y_ra-5ama.css';
import '../../css/f/fjj4ozk6f.css';
import '../../css/r/rd0j9eons.css';
import '../../css/f/fmrryw5wp.css';
import '../../css/z/zibxp2w8s.css';
import '../../css/s/sr42ni0du.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ohl3wd6qt"/><path class="y_ra-5ama"/><path class="fjj4ozk6f"/><path class="rd0j9eons"/><path class="fmrryw5wp"/><path class="zibxp2w8s"/><path class="sr42ni0du"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:image-location"} {...others} />);
}

export default Component;
