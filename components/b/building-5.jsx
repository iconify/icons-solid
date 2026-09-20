import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yoy2mfzob.css';
import '../../css/i/i93envxxw.css';
import '../../css/o/o6kx8dqms.css';
import '../../css/j/jrn5i8bdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yoy2mfzob"/><path class="i93envxxw"/><path class="o6kx8dqms"/><path class="jrn5i8bdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:building-5"} {...others} />);
}

export default Component;
