import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/l/lrhbazbif.css';
import '../../css/q/qjunyybpn.css';
import '../../css/j/jq3ltpbcw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEGHG9w6m"><g class="hv130ab-t"><path class="lrhbazbif"/><path class="qjunyybpn"/><path class="jq3ltpbcw"/></g></mask></defs><path mask="url(#SVGEGHG9w6m)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hot-pot-one"} {...others} />);
}

export default Component;
