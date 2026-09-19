import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/u/u-54wpbwh.css';
import '../../css/a/abjxd4g5a.css';
import '../../css/i/ifwg-w9dt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEEPK9coB"><g class="hv130ab-t"><path class="u-54wpbwh"/><path class="abjxd4g5a"/><path class="ifwg-w9dt"/></g></mask></defs><path mask="url(#SVGEEPK9coB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bottle-two"} {...others} />);
}

export default Component;
