import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vyow_4b8c.css';
import '../../css/u/u973iv91c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vyow_4b8c"/><path class="u973iv91c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:half-cookie"} {...others} />);
}

export default Component;
