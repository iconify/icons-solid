import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bo9z1gbgy.css';
import '../../css/e/ee4qnjb0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bo9z1gbgy"/><path class="ee4qnjb0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:y-square"} {...others} />);
}

export default Component;
