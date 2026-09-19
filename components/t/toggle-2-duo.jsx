import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nb23tyfhv.css';
import '../../css/y/ywir2hbst.css';
import '../../css/k/k2kfsbcgf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nb23tyfhv"/><path class="ywir2hbst"/><path class="k2kfsbcgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:toggle-2-duo"} {...others} />);
}

export default Component;
