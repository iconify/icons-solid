import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt4i1t6ih.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lt4i1t6ih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:thermometer"} {...others} />);
}

export default Component;
