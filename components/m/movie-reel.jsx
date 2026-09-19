import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnerrsv2u.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wnerrsv2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:movie-reel"} {...others} />);
}

export default Component;
