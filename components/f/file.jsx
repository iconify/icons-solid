import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7d2p-b0v.css';
import '../../css/m/mp5nlkbxv.css';
import '../../css/z/zupd9frtd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p7d2p-b0v"/><path class="mp5nlkbxv"/><path class="zupd9frtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file"} {...others} />);
}

export default Component;
