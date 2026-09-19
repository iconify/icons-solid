import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbmm7r-un.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="xbmm7r-un"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:squaredribbble"} {...others} />);
}

export default Component;
