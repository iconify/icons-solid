import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp7fi6bri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lp7fi6bri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:alert-square"} {...others} />);
}

export default Component;
