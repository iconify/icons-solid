import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ud1zwkbmp.css';
import '../../css/v/vksok0byn.css';
import '../../css/r/rbyeil6uw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXRy2Kdut"><g class="aql7dnt-u"><path class="ud1zwkbmp"/><path class="vksok0byn"/><path class="rbyeil6uw"/></g></mask></defs><path mask="url(#SVGXRy2Kdut)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:nut"} {...others} />);
}

export default Component;
