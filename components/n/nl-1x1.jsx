import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbx2t-b6x.css';
import '../../css/a/aw9rmcz9o.css';
import '../../css/x/xyokvnbws.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bbx2t-b6x"/><path class="aw9rmcz9o"/><path class="xyokvnbws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:nl-1x1"} {...others} />);
}

export default Component;
