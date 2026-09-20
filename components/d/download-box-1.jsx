import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty10lgeof.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gycx-tbaz.css';
import '../../css/o/oh6p0fwjz.css';
import '../../css/b/bvktcmhik.css';

const viewBox = {"width":14,"height":14};
const content = `<defs><path id="SVGGRswucRt" class="ty10lgeof"/></defs><g class="ft5dv1b6b"><path class="gycx-tbaz"/><use href="#SVGGRswucRt"/><path class="oh6p0fwjz"/><use href="#SVGGRswucRt"/><path class="bvktcmhik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:download-box-1"} {...others} />);
}

export default Component;
