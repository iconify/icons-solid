import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8y2g1w-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d8y2g1w-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:briefcase-variant-off-outline"} {...others} />);
}

export default Component;
