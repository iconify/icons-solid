import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/o/olqywobdb.css';
import '../../css/n/n86dqqpps.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="pr52f_b5y"><path class="olqywobdb"/><path class="n86dqqpps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:clean-broom-wipe"} {...others} />);
}

export default Component;
