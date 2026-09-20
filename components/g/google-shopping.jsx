import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-fvxvbsq.css';
import '../../css/f/fdzbfobsz.css';
import '../../css/y/yjd8i8vse.css';
import '../../css/w/wdhz7d8hl.css';
import '../../css/n/n_g3robjn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m-fvxvbsq"/><path class="fdzbfobsz"/><path class="yjd8i8vse"/><path class="wdhz7d8hl"/><path class="n_g3robjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-shopping"} {...others} />);
}

export default Component;
