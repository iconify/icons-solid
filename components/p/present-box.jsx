import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/en18tebkx.css';
import '../../css/d/d5hvaebmu.css';
import '../../css/j/jut0cwbej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="en18tebkx"/><path class="d5hvaebmu"/><path class="jut0cwbej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:present-box"} {...others} />);
}

export default Component;
