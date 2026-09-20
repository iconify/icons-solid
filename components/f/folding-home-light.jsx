import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxthv2xzn.css';
import '../../css/o/o6zvk8buv.css';
import '../../css/l/lr_3epb6x.css';
import '../../css/r/r8ph69bil.css';
import '../../css/s/shbjhacsf.css';
import '../../css/v/v2t5oviwj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pxthv2xzn"/><path class="o6zvk8buv"/><path class="lr_3epb6x"/><path class="r8ph69bil"/><path class="shbjhacsf"/><path class="v2t5oviwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:folding-home-light"} {...others} />);
}

export default Component;
