import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3r8h6w8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i3r8h6w8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:elevator-passenger-off"} {...others} />);
}

export default Component;
