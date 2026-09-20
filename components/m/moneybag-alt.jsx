import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aj0w1_9qx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aj0w1_9qx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:moneybag-alt"} {...others} />);
}

export default Component;
