import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj8p36bgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xj8p36bgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:flashlight"} {...others} />);
}

export default Component;
