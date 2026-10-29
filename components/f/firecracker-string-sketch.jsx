import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rrb02niec.css';
import '../../css/e/ecsb1bbva.css';
import '../../css/a/awndadvkq.css';
import '../../css/w/wdnrfxjuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rrb02niec wm-a"/><path class="ecsb1bbva wm-k"/><path class="awndadvkq wm-a"/><path class="wdnrfxjuj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:firecracker-string-sketch"} {...others} />);
}

export default Component;
