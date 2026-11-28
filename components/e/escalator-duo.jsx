import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhxiasruy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h0nez9b5x.css';
import '../../css/k/k4tei8bid.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dhxiasruy secondary"/><g class="dt0cm9dhy primary"><path class="h0nez9b5x"/><path class="k4tei8bid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:escalator-duo"} {...others} />);
}

export default Component;
