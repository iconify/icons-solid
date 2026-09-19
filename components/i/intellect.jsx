import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktxbgbbpn.css';
import '../../css/y/y3f_nfkuo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ktxbgbbpn"/><path class="y3f_nfkuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:intellect"} {...others} />);
}

export default Component;
