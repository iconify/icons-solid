import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/q80v2ub8a.css';
import '../../css/y/yeoc4zxsd.css';
import '../../css/d/dwxhxbcyq.css';
import '../../css/w/w7c56gbju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="q80v2ub8a"/><path class="yeoc4zxsd"/></g><path class="dwxhxbcyq"/><path class="w7c56gbju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-up-down-bold-duotone"} {...others} />);
}

export default Component;
