import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atseoh4ew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atseoh4ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:megaphone-alert"} {...others} />);
}

export default Component;
