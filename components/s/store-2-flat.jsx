import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxy1ww9is.css';
import '../../css/h/h74g0mbrd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vxy1ww9is"/><path class="h74g0mbrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:store-2-flat"} {...others} />);
}

export default Component;
