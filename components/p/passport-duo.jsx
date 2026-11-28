import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5siuz3mb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tfazt4b9n.css';
import '../../css/d/d2mg5e3yn.css';
import '../../css/p/p1ab4zb0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o5siuz3mb secondary"/><g class="dt0cm9dhy primary"><path class="tfazt4b9n"/><circle class="d2mg5e3yn"/><path class="p1ab4zb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:passport-duo"} {...others} />);
}

export default Component;
