import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/u/ucql2ixgq.css';
import '../../css/a/abjxd4g5a.css';
import '../../css/i/ifwg-w9dt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="ucql2ixgq"/><path class="abjxd4g5a"/><path class="ifwg-w9dt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bottle-two"} {...others} />);
}

export default Component;
