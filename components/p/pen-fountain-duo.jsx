import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbgb-f08m.css';
import '../../css/t/tk6_7_b3w.css';
import '../../css/s/s2cet7bec.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qbgb-f08m"/><path clip-rule="evenodd" class="tk6_7_b3w"/><path class="s2cet7bec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pen-fountain-duo"} {...others} />);
}

export default Component;
