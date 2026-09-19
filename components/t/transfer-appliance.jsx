import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyzc8pbog.css';
import '../../css/d/dnz3b-bwt.css';
import '../../css/p/pf732lbkc.css';
import '../../css/d/dby6fccod.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gyzc8pbog"/><path class="dnz3b-bwt"/><path class="pf732lbkc"/><path class="dby6fccod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:transfer-appliance"} {...others} />);
}

export default Component;
