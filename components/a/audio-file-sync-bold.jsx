import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mssq4ub0k.css';
import '../../css/l/lkvs5hb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mssq4ub0k"/><path class="lkvs5hb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:audio-file-sync-bold"} {...others} />);
}

export default Component;
