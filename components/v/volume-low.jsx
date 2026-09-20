import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs8_ejdrv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xs8_ejdrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:volume-low"} {...others} />);
}

export default Component;
