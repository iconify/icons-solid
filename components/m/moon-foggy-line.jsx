import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iky3mbb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iky3mbb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:moon-foggy-line"} {...others} />);
}

export default Component;
