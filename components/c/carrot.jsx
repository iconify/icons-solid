import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nprwb2ypj.css';
import '../../css/v/v_hb3o-xa.css';
import '../../css/m/mh8oh873d.css';
import '../../css/b/blog-cbct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nprwb2ypj wm-shadow"/><path class="v_hb3o-xa wm-shadow"/><path class="mh8oh873d"/><path class="blog-cbct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:carrot"} {...others} />);
}

export default Component;
