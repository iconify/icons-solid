import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qaw7rbkbp.css';
import '../../css/c/cjkvecb0a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHRF2iexP"><g class="aql7dnt-u"><rect transform="rotate(45 24.762 3.243)" class="qaw7rbkbp"/><path class="cjkvecb0a"/></g></mask></defs><path mask="url(#SVGHRF2iexP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tray"} {...others} />);
}

export default Component;
