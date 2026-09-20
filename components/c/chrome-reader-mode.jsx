import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_pzvlfgh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_pzvlfgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:chrome-reader-mode"} {...others} />);
}

export default Component;
