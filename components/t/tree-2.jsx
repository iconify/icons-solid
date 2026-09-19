import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc-i84tkw.css';
import '../../css/l/lrw9mobvn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="sc-i84tkw"/><path class="lrw9mobvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:tree-2"} {...others} />);
}

export default Component;
