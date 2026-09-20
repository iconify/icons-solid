import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0d4t8bwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j0d4t8bwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-mobile-filled"} {...others} />);
}

export default Component;
