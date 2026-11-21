import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7eewub9u.css';
import '../../css/x/x4yr5kbub.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p7eewub9u"/><path class="x4yr5kbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rarbg"} {...others} />);
}

export default Component;
