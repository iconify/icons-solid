import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbpnb1b6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fbpnb1b6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rows-2-plus-bottom"} {...others} />);
}

export default Component;
