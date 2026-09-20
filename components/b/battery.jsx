import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wyiqk3bzv.css';
import '../../css/q/q75y0swvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="wyiqk3bzv"/><path class="q75y0swvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:battery"} {...others} />);
}

export default Component;
