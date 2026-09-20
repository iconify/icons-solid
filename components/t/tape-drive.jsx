import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkbjs4b3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pkbjs4b3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:tape-drive"} {...others} />);
}

export default Component;
