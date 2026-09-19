import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/axk-y2beu.css';
import '../../css/g/gb1wd_b9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="axk-y2beu"/><path class="gb1wd_b9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:trophy"} {...others} />);
}

export default Component;
