import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rz75sybsq.css';
import '../../css/h/hbry40bnh.css';
import '../../css/x/xto-uckdh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rz75sybsq"/><path class="hbry40bnh"/><path class="xto-uckdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:security"} {...others} />);
}

export default Component;
