import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe3qplk3r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xe3qplk3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:handbag-duotone"} {...others} />);
}

export default Component;
