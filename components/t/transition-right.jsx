import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tg7r5obnp.css';
import '../../css/a/ar0z5_bbv.css';
import '../../css/a/aotcudf0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tg7r5obnp"/><path class="ar0z5_bbv"/><path class="aotcudf0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:transition-right"} {...others} />);
}

export default Component;
