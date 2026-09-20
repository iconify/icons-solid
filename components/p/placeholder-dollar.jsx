import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbxwgrbol.css';
import '../../css/p/pyk3d0bro.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="qbxwgrbol"/><path clip-rule="evenodd" class="pyk3d0bro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:placeholder-dollar"} {...others} />);
}

export default Component;
