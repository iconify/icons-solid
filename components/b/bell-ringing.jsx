import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba3_y3ujc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ba3_y3ujc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bell-ringing"} {...others} />);
}

export default Component;
