import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj52in7tj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tj52in7tj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:lock-open-remove-outline"} {...others} />);
}

export default Component;
