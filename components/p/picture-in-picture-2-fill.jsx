import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gompo24de.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gompo24de"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:picture-in-picture-2-fill"} {...others} />);
}

export default Component;
