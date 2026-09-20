import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znmpxwa2p.css';
import '../../css/f/f1sqjublo.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdguohbwi.css';
import '../../css/e/e0eu2sbed.css';
import '../../css/y/yq1rfnbag.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="znmpxwa2p"/><path class="f1sqjublo"/><g class="cuyn6tgcc"><path class="hdguohbwi"/><path class="e0eu2sbed"/></g><path class="yq1rfnbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:swipe"} {...others} />);
}

export default Component;
