import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkfobybmc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/va5b0cwyk.css';
import '../../css/o/o4wz2ober.css';
import '../../css/j/jfa-fdaau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bkfobybmc secondary"/><g class="dt0cm9dhy primary"><path class="va5b0cwyk"/><path class="o4wz2ober"/><path class="jfa-fdaau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:spline-duo"} {...others} />);
}

export default Component;
