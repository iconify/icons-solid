import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/n/np45vlbaq.css';
import '../../css/w/wfolbzbxu.css';
import '../../css/y/ypizglxfp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="np45vlbaq"/><path class="wfolbzbxu"/><path class="ypizglxfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:deepfake-technology-1"} {...others} />);
}

export default Component;
