import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjvb-7nsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kjvb-7nsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:location-1-filled"} {...others} />);
}

export default Component;
