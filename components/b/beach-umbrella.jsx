import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/umf316jej.css';
import '../../css/y/y3xg51wix.css';
import '../../css/p/pqa1ftavv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG49dLfbIq"><g class="aql7dnt-u"><path class="umf316jej"/><path class="y3xg51wix"/><path class="pqa1ftavv"/></g></mask></defs><path mask="url(#SVG49dLfbIq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:beach-umbrella"} {...others} />);
}

export default Component;
