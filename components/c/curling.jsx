import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4e4mlb2g.css';
import '../../css/b/ble3jubnc.css';
import '../../css/s/shz9zobhz.css';
import '../../css/i/ijohicbrj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuu9naeee"><g class="u4e4mlb2g"><path class="ble3jubnc"/><path class="shz9zobhz"/><path class="ijohicbrj"/></g></mask></defs><path mask="url(#SVGuu9naeee)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:curling"} {...others} />);
}

export default Component;
