import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy3vwn_zi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wy3vwn_zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:help-circle"} {...others} />);
}

export default Component;
