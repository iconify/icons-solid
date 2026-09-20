import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghdvi_b4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ghdvi_b4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:where-to-vote"} {...others} />);
}

export default Component;
