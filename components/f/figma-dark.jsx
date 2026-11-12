import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrrmhudgn.css';
import '../../css/s/s1fe8-ujg.css';
import '../../css/z/zzrabizfh.css';
import '../../css/v/v2d1uib7g.css';
import '../../css/k/kia9sac_t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yrrmhudgn"/><path class="s1fe8-ujg"/><circle class="zzrabizfh"/><path class="v2d1uib7g"/><path class="kia9sac_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:figma-dark"} {...others} />);
}

export default Component;
