import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st1q0wxqp.css';

const viewBox = {"width":472,"height":448};
const content = `<path class="st1q0wxqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:hype-machine"} {...others} />);
}

export default Component;
