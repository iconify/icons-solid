import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhw5u9d6z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vhw5u9d6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pen-connect-wifi"} {...others} />);
}

export default Component;
