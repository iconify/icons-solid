import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am1tq7v-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="am1tq7v-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hexagon-letter-g-filled"} {...others} />);
}

export default Component;
