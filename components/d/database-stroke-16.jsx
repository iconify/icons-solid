import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yo49hdc3n.css';
import '../../css/u/u5_yrcoxv.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><ellipse class="yo49hdc3n"/><path class="u5_yrcoxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:database-stroke-16"} {...others} />);
}

export default Component;
