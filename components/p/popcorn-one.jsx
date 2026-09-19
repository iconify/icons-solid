import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mz1jqnynl.css';
import '../../css/t/tpn2pebwd.css';
import '../../css/x/xhbx_nbhx.css';
import '../../css/i/ig18oqu2v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdD71QcOE"><g class="aql7dnt-u"><path class="mz1jqnynl"/><path class="tpn2pebwd"/><path class="xhbx_nbhx"/><path class="ig18oqu2v"/></g></mask></defs><path mask="url(#SVGdD71QcOE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:popcorn-one"} {...others} />);
}

export default Component;
