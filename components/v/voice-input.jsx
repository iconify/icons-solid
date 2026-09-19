import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/b8tqzsb4n.css';
import '../../css/z/zsvlx-b6c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtC5EwcvX"><g class="aql7dnt-u"><path class="b8tqzsb4n"/><path class="zsvlx-b6c"/></g></mask></defs><path mask="url(#SVGtC5EwcvX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:voice-input"} {...others} />);
}

export default Component;
