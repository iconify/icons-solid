import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju9wp0ymi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ju9wp0ymi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:location-pause"} {...others} />);
}

export default Component;
