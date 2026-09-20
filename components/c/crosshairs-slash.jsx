import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cz9rkkbgh.css';
import '../../css/i/i8np18btt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cz9rkkbgh"/><path class="i8np18btt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:crosshairs-slash"} {...others} />);
}

export default Component;
