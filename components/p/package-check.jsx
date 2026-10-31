import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnwis3bxs.css';
import '../../css/v/v93eny-eg.css';
import '../../css/o/osgbtpodr.css';
import '../../css/d/dyawbzbqh.css';
import '../../css/b/b2wk6h4yu.css';
import '../../css/u/uizl2ebeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bnwis3bxs wm-k"/><path class="v93eny-eg wm-s"/><path class="osgbtpodr wm-deco"/><path class="dyawbzbqh wm-k"/><path class="b2wk6h4yu wm-s"/><path class="uizl2ebeb wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:package-check"} {...others} />);
}

export default Component;
