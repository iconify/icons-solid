import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m28cpcovm.css';
import '../../css/o/oceiybcet.css';
import '../../css/f/f8ufy2bhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m28cpcovm wm-k"/><path class="oceiybcet wm-a"/><path class="f8ufy2bhm wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:japanese-yen"} {...others} />);
}

export default Component;
