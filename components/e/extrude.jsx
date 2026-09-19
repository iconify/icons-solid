import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/elrykkaqu.css';
import '../../css/q/q7am3ac6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="elrykkaqu"/><path class="q7am3ac6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:extrude"} {...others} />);
}

export default Component;
