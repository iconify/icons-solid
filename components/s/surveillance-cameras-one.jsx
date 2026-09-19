import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pjotv2p9i.css';
import '../../css/s/s13znbc5y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGY1W7leOk"><g class="rohhhzb0l"><path class="pjotv2p9i"/><path class="s13znbc5y"/></g></mask></defs><path mask="url(#SVGY1W7leOk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:surveillance-cameras-one"} {...others} />);
}

export default Component;
