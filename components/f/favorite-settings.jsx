import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqol3ybqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aqol3ybqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:favorite-settings"} {...others} />);
}

export default Component;
