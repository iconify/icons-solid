import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dkacq2k4x.css';
import '../../css/g/gaenu2bgb.css';
import '../../css/g/gp9mhbcvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dkacq2k4x"/><path class="gaenu2bgb"/><path class="gp9mhbcvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:airdrop"} {...others} />);
}

export default Component;
