import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt7poqzkq.css';
import '../../css/d/d-llkv2cb.css';
import '../../css/b/bmqf4y-5r.css';
import '../../css/d/dk8d3t44m.css';
import '../../css/z/z_4m6ybwr.css';
import '../../css/c/c98y_fk5b.css';
import '../../css/y/y1uccccnt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zt7poqzkq"/><linearGradient id="SVGbScAOcEO" x1="109.7" x2="402.4" y1="109.7" y2="402.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset=".349" class="bmqf4y-5r"/><stop offset=".533" class="dk8d3t44m"/><stop offset=".712" class="z_4m6ybwr"/><stop offset="1" class="c98y_fk5b"/></linearGradient><path fill="url(#SVGbScAOcEO)" class="y1uccccnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:meelo-light"} {...others} />);
}

export default Component;
