import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8q8xga_a.css';

const viewBox = {"width":1024,"height":832};
const content = `<path class="g8q8xga_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:repeatone"} {...others} />);
}

export default Component;
