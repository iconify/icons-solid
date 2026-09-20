import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8xbvrbzk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i8xbvrbzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:star-half-outline"} {...others} />);
}

export default Component;
