import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaqcsrbps.css';
import '../../css/e/etx3uacem.css';
import '../../css/a/ar4azzsja.css';
import '../../css/y/yk2l4-b7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qaqcsrbps"/><path class="etx3uacem"/><path class="ar4azzsja"/><path class="yk2l4-b7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-round-bold-duotone"} {...others} />);
}

export default Component;
