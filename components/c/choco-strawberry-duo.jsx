import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ixwqoccmy.css';
import '../../css/r/ri0xy91fh.css';
import '../../css/x/x0yp8_l9a.css';
import '../../css/i/ik5xphcnq.css';
import '../../css/v/vjvpaaccg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ixwqoccmy"/><path class="ri0xy91fh wm-a"/><path class="x0yp8_l9a"/><path class="ik5xphcnq wm-a"/><path class="vjvpaaccg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:choco-strawberry-duo"} {...others} />);
}

export default Component;
