import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/j/jq32u2b1d.css';
import '../../css/g/g5pyiybbs.css';
import '../../css/f/ftdsv3nli.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="jq32u2b1d"/><path class="g5pyiybbs"/><path class="ftdsv3nli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:product-cloth-duo"} {...others} />);
}

export default Component;
