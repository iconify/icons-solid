import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pxetsgolg.css';
import '../../css/a/aa1685piq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pxetsgolg"/><path class="aa1685piq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pet-friendly-hotel"} {...others} />);
}

export default Component;
