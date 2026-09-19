import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mi53ns-dt.css';
import '../../css/w/w-web3b5l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtDPMgbrM"><g class="aql7dnt-u"><path class="mi53ns-dt"/><path class="w-web3b5l"/></g></mask></defs><path mask="url(#SVGtDPMgbrM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bloom"} {...others} />);
}

export default Component;
