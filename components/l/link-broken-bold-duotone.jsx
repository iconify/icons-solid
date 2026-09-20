import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvj8odlbj.css';
import '../../css/i/iw1lz7bgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pvj8odlbj"/><path class="iw1lz7bgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-broken-bold-duotone"} {...others} />);
}

export default Component;
