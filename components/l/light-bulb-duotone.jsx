import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzi254bkh.css';
import '../../css/j/j-f4z-bbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kzi254bkh"/><path class="j-f4z-bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:light-bulb-duotone"} {...others} />);
}

export default Component;
