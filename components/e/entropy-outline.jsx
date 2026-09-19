import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jhwyttbbw.css';
import '../../css/y/y6qsdubar.css';
import '../../css/u/url72jp-e.css';
import '../../css/s/sgatz43yh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="jhwyttbbw"/><circle class="y6qsdubar"/><circle class="url72jp-e"/><circle class="sgatz43yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:entropy-outline"} {...others} />);
}

export default Component;
