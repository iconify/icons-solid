import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdftnwb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wdftnwb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:store-settings-outline"} {...others} />);
}

export default Component;
