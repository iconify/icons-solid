import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbkso2b6p.css';
import '../../css/w/wy-2vbkjf.css';
import '../../css/s/s5171abot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="hbkso2b6p"/><circle class="wy-2vbkjf"/><path class="s5171abot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:motion"} {...others} />);
}

export default Component;
