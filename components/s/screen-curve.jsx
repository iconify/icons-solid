import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/f/fl1sb-bxk.css';
import '../../css/f/f0fwq5baa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="fl1sb-bxk"/><path class="f0fwq5baa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:screen-curve"} {...others} />);
}

export default Component;
