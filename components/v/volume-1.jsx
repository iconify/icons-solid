import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpl0q1bzo.css';
import '../../css/y/y0-c0ac4t.css';
import '../../css/d/dd6fl6u9c.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="xpl0q1bzo"/><path class="y0-c0ac4t"/><path class="dd6fl6u9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:volume-1"} {...others} />);
}

export default Component;
