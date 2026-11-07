import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eov14kbcx.css';
import '../../css/e/e71xpcq7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eov14kbcx"/><path class="e71xpcq7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stop-bold-duotone"} {...others} />);
}

export default Component;
