import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/x/xgefj9bwf.css';
import '../../css/z/zw0l5dben.css';
import '../../css/m/mn2kr9b5p.css';
import '../../css/z/zjbiaw26c.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="xgefj9bwf"/><path class="zw0l5dben"/><path class="mn2kr9b5p"/><path class="zjbiaw26c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:money-coin-2-duo"} {...others} />);
}

export default Component;
