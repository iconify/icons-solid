import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tovw-nbpg.css';
import '../../css/o/o248y76-l.css';
import '../../css/p/pwpi-jbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tovw-nbpg"/><path class="o248y76-l"/><path class="pwpi-jbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shopping-cart-upload"} {...others} />);
}

export default Component;
