import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a3jcc97mw.css';
import '../../css/c/cgk8wsbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a3jcc97mw"/><path class="cgk8wsbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-z-octagon"} {...others} />);
}

export default Component;
