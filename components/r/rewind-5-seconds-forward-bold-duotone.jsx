import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gekq4yo7t.css';
import '../../css/m/m87qi3nmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gekq4yo7t"/><path clip-rule="evenodd" class="m87qi3nmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-5-seconds-forward-bold-duotone"} {...others} />);
}

export default Component;
