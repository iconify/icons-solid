import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zd1deebgz.css';
import '../../css/w/w8aqjtb4l.css';
import '../../css/y/y8q-dtbfz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="zd1deebgz"/><path class="w8aqjtb4l"/><ellipse class="y8q-dtbfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:data"} {...others} />);
}

export default Component;
