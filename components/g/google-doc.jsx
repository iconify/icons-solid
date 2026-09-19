import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gpycsr50z.css';
import '../../css/y/yttrkej4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gpycsr50z"/><path class="yttrkej4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:google-doc"} {...others} />);
}

export default Component;
