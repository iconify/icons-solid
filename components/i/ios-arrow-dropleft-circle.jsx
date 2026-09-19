import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4n8a_oym.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p4n8a_oym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-arrow-dropleft-circle"} {...others} />);
}

export default Component;
