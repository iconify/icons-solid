import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uf7sxplet.css';
import '../../css/k/kqdujgb2y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHMJDneYK"><g class="aql7dnt-u"><path class="uf7sxplet"/><path class="kqdujgb2y"/></g></mask></defs><path mask="url(#SVGHMJDneYK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:usb-memory-stick"} {...others} />);
}

export default Component;
