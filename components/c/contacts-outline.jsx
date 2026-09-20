import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl324dpyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nl324dpyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:contacts-outline"} {...others} />);
}

export default Component;
