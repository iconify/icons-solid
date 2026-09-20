import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0m4y9b-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k0m4y9b-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:door-closed-locked"} {...others} />);
}

export default Component;
