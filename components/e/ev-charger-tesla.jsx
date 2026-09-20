import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0dybkv5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0dybkv5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:ev-charger-tesla"} {...others} />);
}

export default Component;
