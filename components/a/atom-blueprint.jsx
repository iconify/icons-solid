import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d_xpcxb4a.css';
import '../../css/o/o_0yafjul.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/e/eod03wb_e.css';
import '../../css/e/evx6rzb0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="d_xpcxb4a wm-deco"/><path class="o_0yafjul wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="eod03wb_e wm-k"/><path class="evx6rzb0c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:atom-blueprint"} {...others} />);
}

export default Component;
