import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf_a4xbny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sf_a4xbny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:beehiiv"} {...others} />);
}

export default Component;
