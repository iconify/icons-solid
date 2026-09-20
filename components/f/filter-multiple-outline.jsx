import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvnie9sjv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kvnie9sjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:filter-multiple-outline"} {...others} />);
}

export default Component;
