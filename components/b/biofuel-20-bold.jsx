import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo4j70bbm.css';
import '../../css/v/v21ewjqfm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qo4j70bbm"/><path class="v21ewjqfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biofuel-20-bold"} {...others} />);
}

export default Component;
