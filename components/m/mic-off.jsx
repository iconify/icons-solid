import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/js103e65u.css';

const viewBox = {"width":376,"height":512};
const content = `<path class="js103e65u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:mic-off"} {...others} />);
}

export default Component;
