import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkgkxnb0k.css';
import '../../css/x/x0zzi0bor.css';
import '../../css/n/nh75w0b0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pkgkxnb0k"/><path class="x0zzi0bor"/><path class="nh75w0b0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-graph-bold-duotone"} {...others} />);
}

export default Component;
