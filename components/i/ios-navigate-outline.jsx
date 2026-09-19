import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifpq7ebym.css';
import '../../css/u/un-gg2bvn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ifpq7ebym"/><path class="un-gg2bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-navigate-outline"} {...others} />);
}

export default Component;
