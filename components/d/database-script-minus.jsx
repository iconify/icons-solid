import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlngh0wix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wlngh0wix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:database-script-minus"} {...others} />);
}

export default Component;
