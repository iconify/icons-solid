import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/wazvzmbyi.css';
import '../../css/m/mvkz-zbzz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxLKXVbHn"><g class="aql7dnt-u"><path class="wazvzmbyi"/><path class="mvkz-zbzz"/></g></mask></defs><path mask="url(#SVGxLKXVbHn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:applet-closed"} {...others} />);
}

export default Component;
