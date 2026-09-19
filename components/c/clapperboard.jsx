import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd9e6acip.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xd9e6acip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:clapperboard"} {...others} />);
}

export default Component;
