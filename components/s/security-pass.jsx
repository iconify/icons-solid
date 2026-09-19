import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w4_echbvg.css';
import '../../css/a/auu9eitpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w4_echbvg"/><path class="auu9eitpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:security-pass"} {...others} />);
}

export default Component;
