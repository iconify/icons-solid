import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-zhcrggc.css';
import '../../css/f/f3cvqbgrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o-zhcrggc"/><path class="f3cvqbgrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:no-coin"} {...others} />);
}

export default Component;
