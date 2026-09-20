import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/koyea542b.css';
import '../../css/z/zy-0-izpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="koyea542b"/><path class="zy-0-izpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:computer-chip-flash"} {...others} />);
}

export default Component;
