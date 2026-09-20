import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf-a91bde.css';
import '../../css/q/q0zx9pbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xf-a91bde"/><path class="q0zx9pbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifer-bold"} {...others} />);
}

export default Component;
