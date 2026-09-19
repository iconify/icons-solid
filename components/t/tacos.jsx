import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu5gjko1b.css';

const viewBox = {"width":512,"height":448};
const content = `<path class="lu5gjko1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:tacos"} {...others} />);
}

export default Component;
