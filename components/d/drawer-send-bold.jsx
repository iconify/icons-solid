import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq87f3h9c.css';
import '../../css/d/d4ywfcbbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vq87f3h9c"/><path class="d4ywfcbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:drawer-send-bold"} {...others} />);
}

export default Component;
