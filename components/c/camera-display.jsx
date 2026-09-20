import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/phf8mbbug.css';
import '../../css/w/wzyzn-bgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="phf8mbbug"/><path class="wzyzn-bgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:camera-display"} {...others} />);
}

export default Component;
