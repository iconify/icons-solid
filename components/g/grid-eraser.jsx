import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mu060xb3h.css';
import '../../css/j/jh16l738l.css';
import '../../css/f/fv8jzw-8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mu060xb3h"/><path class="jh16l738l"/><path class="fv8jzw-8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:grid-eraser"} {...others} />);
}

export default Component;
