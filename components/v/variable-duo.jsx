import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/og9sisiac.css';
import '../../css/f/f9bybebcd.css';
import '../../css/d/dsgdte86s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="og9sisiac"/><path class="f9bybebcd"/><path class="dsgdte86s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:variable-duo"} {...others} />);
}

export default Component;
