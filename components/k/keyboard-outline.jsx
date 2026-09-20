import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxt8p2blw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxt8p2blw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:keyboard-outline"} {...others} />);
}

export default Component;
