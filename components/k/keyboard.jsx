import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2qtvgb0p.css';
import '../../css/z/z4jbslb2h.css';
import '../../css/l/lkt-2en5c.css';
import '../../css/g/g028rpyqs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b2qtvgb0p wm-k"/><path class="wm-a z4jbslb2h"/><path class="lkt-2en5c wm-a"/><path class="g028rpyqs wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:keyboard"} {...others} />);
}

export default Component;
