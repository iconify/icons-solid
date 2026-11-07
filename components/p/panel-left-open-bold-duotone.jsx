import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9u-03p8n.css';
import '../../css/k/keuudrbox.css';
import '../../css/j/js631gbug.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q9u-03p8n"/><path class="keuudrbox"/><path class="js631gbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-left-open-bold-duotone"} {...others} />);
}

export default Component;
