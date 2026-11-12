import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eaxym5bbg.css';
import '../../css/j/jc749p_jn.css';
import '../../css/a/ad7t_kw6c.css';
import '../../css/v/vwjcn0vtv.css';
import '../../css/e/esob1cb5m.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGjC0eee6w" x1="256" x2="256" y2="512" gradientUnits="userSpaceOnUse"><stop offset="0" class="eaxym5bbg"/><stop offset="1" class="jc749p_jn"/></linearGradient><path fill="url(#SVGjC0eee6w)" class="ad7t_kw6c"/><path class="vwjcn0vtv"/><path class="esob1cb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yacreaderlibrary"} {...others} />);
}

export default Component;
