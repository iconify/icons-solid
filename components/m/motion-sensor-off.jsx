import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z32lg_tbn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z32lg_tbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:motion-sensor-off"} {...others} />);
}

export default Component;
