import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bemeq4bko.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bemeq4bko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-refresh-empty"} {...others} />);
}

export default Component;
