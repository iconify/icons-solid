import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-7em1b2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-7em1b2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:water-heater-error"} {...others} />);
}

export default Component;
