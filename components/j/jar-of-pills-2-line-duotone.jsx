import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wbicn6byt.css';
import '../../css/x/xt3il7bsh.css';
import '../../css/o/o-a468a5k.css';
import '../../css/e/egqi0db6d.css';
import '../../css/d/d9cgzhbuf.css';
import '../../css/s/sdzmkabql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wbicn6byt"/><path class="xt3il7bsh"/><path class="o-a468a5k"/><path class="egqi0db6d"/><path class="d9cgzhbuf"/><path class="sdzmkabql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-2-line-duotone"} {...others} />);
}

export default Component;
