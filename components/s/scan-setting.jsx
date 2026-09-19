import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/iirtqzb_w.css';
import '../../css/q/q-a1_7htw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGz9sPwe5X"><g class="aql7dnt-u"><rect class="iirtqzb_w"/><path class="q-a1_7htw"/></g></mask></defs><path mask="url(#SVGz9sPwe5X)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:scan-setting"} {...others} />);
}

export default Component;
