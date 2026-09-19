import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zd1deebgz.css';
import '../../css/w/w8aqjtb4l.css';
import '../../css/k/k4d7ijbpl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwxOyzcPc"><g class="aql7dnt-u"><path class="zd1deebgz"/><path class="w8aqjtb4l"/><ellipse class="k4d7ijbpl"/></g></mask></defs><path mask="url(#SVGwxOyzcPc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:data"} {...others} />);
}

export default Component;
