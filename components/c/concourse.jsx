import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk20u1a4q.css';
import '../../css/h/hbllqccic.css';
import '../../css/s/sua4k-bnu.css';

const viewBox = {"width":24,"height":24};
const content = `<clipPath id="SVGJBnm7b0g"><path class="vk20u1a4q"/></clipPath><g clip-path="url(#SVGJBnm7b0g)" transform="translate(1.036 1.05)scale(.9137)" class="hbllqccic"><path class="sua4k-bnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:concourse"} {...others} />);
}

export default Component;
