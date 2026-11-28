import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkdbiib-c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f-72ljw4x.css';
import '../../css/j/joz8m6uoh.css';
import '../../css/h/hp8nadcvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary vkdbiib-c"/><g class="dt0cm9dhy primary"><path class="f-72ljw4x"/><path class="joz8m6uoh"/><path class="hp8nadcvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:coffee-duo"} {...others} />);
}

export default Component;
