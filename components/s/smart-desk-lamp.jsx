import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7o3g-5yu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x7o3g-5yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:smart-desk-lamp"} {...others} />);
}

export default Component;
