import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar164sbfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ar164sbfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:currency-cny-2-line"} {...others} />);
}

export default Component;
