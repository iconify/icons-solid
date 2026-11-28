import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjd2x0bfl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dp12a2bii.css';
import '../../css/r/rhre_2l0s.css';
import '../../css/m/mp65rxbup.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjd2x0bfl secondary"/><g class="dt0cm9dhy primary"><path class="dp12a2bii"/><path class="rhre_2l0s"/><path class="mp65rxbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:message-square-quote-duo"} {...others} />);
}

export default Component;
