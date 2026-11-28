import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1g4t1k_d.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/ht47y72rz.css';
import '../../css/t/tk-e4lsnl.css';
import '../../css/g/g5oul6r0u.css';
import '../../css/f/f_7w_yozd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1g4t1k_d secondary"/><g class="dt0cm9dhy primary"><path class="ht47y72rz"/><path class="tk-e4lsnl"/><path class="g5oul6r0u"/><path class="f_7w_yozd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:receipt-percent-duo"} {...others} />);
}

export default Component;
