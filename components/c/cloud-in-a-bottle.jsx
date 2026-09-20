import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jokvfab7f.css';
import '../../css/y/yvy8txbyu.css';
import '../../css/u/u_hpogb1c.css';
import '../../css/i/i4t04qbnm.css';
import '../../css/f/fqmrt0mhe.css';
import '../../css/j/j29js4b3l.css';
import '../../css/h/h25ht16ze.css';
import '../../css/o/onnfeqn0i.css';
import '../../css/o/oyu2dubvf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jokvfab7f"/><path class="yvy8txbyu"/><path class="u_hpogb1c"/><path class="i4t04qbnm"/><path class="fqmrt0mhe"/><path class="j29js4b3l"/><path class="h25ht16ze"/><path class="onnfeqn0i"/><path class="oyu2dubvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cloud-in-a-bottle"} {...others} />);
}

export default Component;
