import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nxtybr76f.css';
import '../../css/o/o1xiz1bxm.css';
import '../../css/l/l54so-d8u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkA7M7dHM"><g class="aql7dnt-u"><path class="nxtybr76f"/><path class="o1xiz1bxm"/><path class="l54so-d8u"/></g></mask></defs><path mask="url(#SVGkA7M7dHM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:red-envelope"} {...others} />);
}

export default Component;
