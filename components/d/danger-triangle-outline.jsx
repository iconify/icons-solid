import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qosnnxx8l.css';
import '../../css/x/x41xvfi0c.css';
import '../../css/h/h0ezbvb6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qosnnxx8l"/><path class="x41xvfi0c"/><path clip-rule="evenodd" class="h0ezbvb6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:danger-triangle-outline"} {...others} />);
}

export default Component;
