import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqznn1ydc.css';
import '../../css/u/ui61hbb4y.css';
import '../../css/u/ugvles_jq.css';
import '../../css/g/g74_dkb1w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG72VMXbEW"><g class="wqznn1ydc"><path class="ui61hbb4y"/><path class="ugvles_jq"/><path class="g74_dkb1w"/></g></mask></defs><path mask="url(#SVG72VMXbEW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:skating"} {...others} />);
}

export default Component;
