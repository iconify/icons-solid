import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yfdsjrb1q.css';
import '../../css/t/twnxp1ntc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJOMcjcbP"><g class="aql7dnt-u"><path class="yfdsjrb1q"/><path class="twnxp1ntc"/></g></mask></defs><path mask="url(#SVGJOMcjcbP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sweater"} {...others} />);
}

export default Component;
