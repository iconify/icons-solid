import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cd4u-jotd.css';
import '../../css/q/qnyzqcjhg.css';
import '../../css/v/vrr2_qbuw.css';
import '../../css/i/i4mws0pjo.css';
import '../../css/f/f__1e-wap.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cd4u-jotd"/><path class="qnyzqcjhg"/><path class="vrr2_qbuw"/><path class="i4mws0pjo"/><path class="f__1e-wap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:digital-player-phone-speaker-1"} {...others} />);
}

export default Component;
