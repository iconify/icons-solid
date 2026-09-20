import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni-2a0bqi.css';
import '../../css/l/l78r7fgdc.css';
import '../../css/f/f39hclbhm.css';
import '../../css/o/opcti8bmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ni-2a0bqi"/><path class="l78r7fgdc"/><path class="f39hclbhm"/><path class="opcti8bmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:repeat"} {...others} />);
}

export default Component;
