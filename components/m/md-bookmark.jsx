import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nas3ou1jb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nas3ou1jb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-bookmark"} {...others} />);
}

export default Component;
