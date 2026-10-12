import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldie7dbqp.css';
import '../../css/f/f25sq8ybr.css';
import '../../css/l/lztzvubai.css';
import '../../css/g/gnqh0y9sc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ldie7dbqp"/><path class="f25sq8ybr"/><path class="lztzvubai"/><path class="gnqh0y9sc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gem-20-bold"} {...others} />);
}

export default Component;
