import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_xr5ysjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_xr5ysjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chrome-solid"} {...others} />);
}

export default Component;
