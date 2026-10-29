import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh0755-mp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fh0755-mp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:map-pin-check-solid"} {...others} />);
}

export default Component;
