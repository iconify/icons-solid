import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g-cayachp.css';
import '../../css/o/ohslb-b-p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="g-cayachp"/><path class="ohslb-b-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:exchange-two"} {...others} />);
}

export default Component;
