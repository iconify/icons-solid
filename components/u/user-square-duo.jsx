import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr1865n3b.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mie31z6an.css';
import '../../css/o/o-vq384-b.css';
import '../../css/f/f7x0orx7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary wr1865n3b"/><g class="dt0cm9dhy primary"><path class="mie31z6an"/><circle class="o-vq384-b"/><path class="f7x0orx7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:user-square-duo"} {...others} />);
}

export default Component;
