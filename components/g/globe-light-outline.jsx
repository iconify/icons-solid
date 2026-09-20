import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a92ce1lrl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a92ce1lrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:globe-light-outline"} {...others} />);
}

export default Component;
