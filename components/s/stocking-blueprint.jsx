import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jhdu2jbve.css';
import '../../css/i/im154wbuh.css';
import '../../css/w/wgdw9fsnj.css';
import '../../css/o/o25cc4zjh.css';
import '../../css/g/gd4v5cbxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jhdu2jbve wm-deco"/><path class="im154wbuh wm-deco"/><path class="wgdw9fsnj wm-deco"/><path class="o25cc4zjh wm-k"/><path class="gd4v5cbxf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stocking-blueprint"} {...others} />);
}

export default Component;
