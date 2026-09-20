import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9jlcdljy.css';
import '../../css/n/ny_g8_b-q.css';
import '../../css/h/hrtbh56zp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="z9jlcdljy"/><path class="ny_g8_b-q"/><path clip-rule="evenodd" class="hrtbh56zp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:watch-square-menu-flat"} {...others} />);
}

export default Component;
