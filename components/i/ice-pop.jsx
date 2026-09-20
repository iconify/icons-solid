import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz0n5g1vs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sz0n5g1vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:ice-pop"} {...others} />);
}

export default Component;
