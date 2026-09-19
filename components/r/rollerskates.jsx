import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqznn1ydc.css';
import '../../css/u/ui61hbb4y.css';
import '../../css/u/ugvles_jq.css';
import '../../css/d/dmdwoux-t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJ1SrHbrZ"><g class="wqznn1ydc"><path class="ui61hbb4y"/><path class="ugvles_jq"/><path class="dmdwoux-t"/></g></mask></defs><path mask="url(#SVGJ1SrHbrZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rollerskates"} {...others} />);
}

export default Component;
