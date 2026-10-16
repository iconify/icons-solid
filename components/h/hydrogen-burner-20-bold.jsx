import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyiqdq-1y.css';
import '../../css/e/ek3-3_91h.css';
import '../../css/f/fpc4qk6ec.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jyiqdq-1y"/><path class="ek3-3_91h"/><path class="fpc4qk6ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-burner-20-bold"} {...others} />);
}

export default Component;
