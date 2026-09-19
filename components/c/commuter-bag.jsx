import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e08nudb7u.css';
import '../../css/y/y5esaybsd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGH7NnydCk"><g class="aql7dnt-u"><path class="e08nudb7u"/><rect class="y5esaybsd"/></g></mask></defs><path mask="url(#SVGH7NnydCk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:commuter-bag"} {...others} />);
}

export default Component;
