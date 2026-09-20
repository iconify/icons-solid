import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqgb_dwuh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uqgb_dwuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tv-old"} {...others} />);
}

export default Component;
