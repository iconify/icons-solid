import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/syz06951z.css';
import '../../css/p/p-c69acou.css';
import '../../css/e/e6k_5sbxx.css';
import '../../css/h/hcb01bbhn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgqNzydRY"><g class="aql7dnt-u"><path class="syz06951z"/><path class="p-c69acou"/><path class="e6k_5sbxx"/><path class="hcb01bbhn"/></g></mask></defs><path mask="url(#SVGgqNzydRY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:data-file"} {...others} />);
}

export default Component;
