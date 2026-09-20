import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgvjo9b1i.css';
import '../../css/z/zo2b48v8n.css';
import '../../css/s/sdob9xb_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pgvjo9b1i"/><path class="zo2b48v8n"/><path class="sdob9xb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:moon-alt-duotone"} {...others} />);
}

export default Component;
