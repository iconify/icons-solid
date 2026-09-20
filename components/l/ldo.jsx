import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_yzt2k0i.css';
import '../../css/b/b_9exq3et.css';
import '../../css/a/aagrbllbb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_yzt2k0i"/><path class="b_9exq3et"/><path class="aagrbllbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ldo"} {...others} />);
}

export default Component;
