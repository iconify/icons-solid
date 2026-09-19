import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4cw9ebxc.css';

const viewBox = {"width":528,"height":448};
const content = `<path class="w4cw9ebxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:machine-wash"} {...others} />);
}

export default Component;
