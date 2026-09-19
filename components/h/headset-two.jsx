import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uc-2f9vbf.css';
import '../../css/k/k7sl3bboy.css';
import '../../css/r/rg5jo6gkv.css';
import '../../css/l/lxqcwwbex.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTebUpqlO"><g class="aql7dnt-u"><path class="uc-2f9vbf"/><path class="k7sl3bboy"/><path class="rg5jo6gkv"/><path class="lxqcwwbex"/></g></mask></defs><path mask="url(#SVGTebUpqlO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:headset-two"} {...others} />);
}

export default Component;
