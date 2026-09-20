import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/fuvp5_4iq.css';
import '../../css/z/zridt8jdc.css';
import '../../css/a/ahe89fbdt.css';
import '../../css/g/gaiyfj76i.css';
import '../../css/s/shw_36b0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="fuvp5_4iq"/><path class="zridt8jdc"/><path class="ahe89fbdt"/><path class="gaiyfj76i"/><path class="shw_36b0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:hotel-bed-2"} {...others} />);
}

export default Component;
