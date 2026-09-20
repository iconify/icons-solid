import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4hduvb-v.css';
import '../../css/p/ppwhpebbe.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j4hduvb-v"/><path clip-rule="evenodd" class="ppwhpebbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:eslint-solid"} {...others} />);
}

export default Component;
