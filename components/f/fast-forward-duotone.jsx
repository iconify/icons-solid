import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1ncy95lk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x1ncy95lk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:fast-forward-duotone"} {...others} />);
}

export default Component;
