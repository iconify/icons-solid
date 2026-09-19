import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iza0mcbel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iza0mcbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:appletv-sim"} {...others} />);
}

export default Component;
