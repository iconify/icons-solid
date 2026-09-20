import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bri9ce21d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bri9ce21d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:taiwan-dollar"} {...others} />);
}

export default Component;
