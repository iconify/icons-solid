import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t090o9qrh.css';
import '../../css/m/mpg0prmyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t090o9qrh"/><path class="mpg0prmyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:user-xmark"} {...others} />);
}

export default Component;
