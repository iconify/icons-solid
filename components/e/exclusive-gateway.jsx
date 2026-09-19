import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/r1ocmpbbi.css';
import '../../css/k/kizc-saoc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6iS3xbOz"><g class="rohhhzb0l"><path class="r1ocmpbbi"/><path class="kizc-saoc"/></g></mask></defs><path mask="url(#SVG6iS3xbOz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:exclusive-gateway"} {...others} />);
}

export default Component;
