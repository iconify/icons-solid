import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/oz00ohsyf.css';
import '../../css/v/vrvs2074r.css';
import '../../css/t/t6ekaqv9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="oz00ohsyf wm-k"/><path class="vrvs2074r wm-s"/><path class="t6ekaqv9m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:remove-formatting"} {...others} />);
}

export default Component;
