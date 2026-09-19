import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6xg8hrwc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g6xg8hrwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:cloud-outline"} {...others} />);
}

export default Component;
