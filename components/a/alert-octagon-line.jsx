import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhi4-9wtp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xhi4-9wtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:alert-octagon-line"} {...others} />);
}

export default Component;
