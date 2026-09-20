import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/czwy6vbnw.css';
import '../../css/o/o2dceybsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="czwy6vbnw"/><circle class="o2dceybsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:joystick"} {...others} />);
}

export default Component;
