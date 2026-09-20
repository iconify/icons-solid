import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xfrpiybet.css';
import '../../css/y/y9_pdc2tp.css';
import '../../css/q/qsxp9sa8e.css';
import '../../css/n/n7nnqq0ig.css';
import '../../css/o/ounnel9md.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xfrpiybet"/><path class="y9_pdc2tp"/><path class="qsxp9sa8e"/><path class="n7nnqq0ig"/><path class="ounnel9md"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:image-file-eps"} {...others} />);
}

export default Component;
