import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b54bhv41g.css';
import '../../css/w/wftjatb3x.css';
import '../../css/r/r7f6tgbnr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="b54bhv41g clr-i-solid clr-i-solid-path-1"/><path class="clr-i-solid clr-i-solid-path-2 wftjatb3x"/><path class="clr-i-solid clr-i-solid-path-3 r7f6tgbnr"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:event-solid"} {...others} />);
}

export default Component;
