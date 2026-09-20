import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmh5xvb-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmh5xvb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:script-text-outline"} {...others} />);
}

export default Component;
