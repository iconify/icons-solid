import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d55x_6biy.css';
import '../../css/r/rpd7zmbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d55x_6biy"/><path class="rpd7zmbwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bread-loaf"} {...others} />);
}

export default Component;
