import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unaz6kbhl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="unaz6kbhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:paragraph-2"} {...others} />);
}

export default Component;
