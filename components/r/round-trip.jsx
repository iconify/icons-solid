import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/oco35wj8x.css';
import '../../css/g/gue0ecbep.css';
import '../../css/i/i6nftmbma.css';
import '../../css/g/gp9serp5c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="oco35wj8x"/><path class="gue0ecbep"/><path class="i6nftmbma"/><path class="gp9serp5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:round-trip"} {...others} />);
}

export default Component;
