import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a76nh6dhy.css';
import '../../css/x/x2e97n8nb.css';
import '../../css/h/h4qjhb_wj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="a76nh6dhy"/><path class="x2e97n8nb"/><path class="h4qjhb_wj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:oval-love"} {...others} />);
}

export default Component;
