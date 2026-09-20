import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/mt6g2645m.css';
import '../../css/d/du76ckpmo.css';
import '../../css/x/x111trbwk.css';
import '../../css/y/ymd-0ccih.css';
import '../../css/k/ktx9ixb5y.css';
import '../../css/i/i2-e59brc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="mt6g2645m"/><path class="du76ckpmo"/><path class="x111trbwk"/><path class="ymd-0ccih"/><path class="ktx9ixb5y"/><path class="i2-e59brc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:hierarchy-8"} {...others} />);
}

export default Component;
