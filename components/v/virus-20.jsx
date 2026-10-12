import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed20mnbov.css';
import '../../css/d/dcz9l7ass.css';
import '../../css/u/u5rbq8rlz.css';
import '../../css/a/azcza6bfo.css';
import '../../css/v/v1_ufab2c.css';
import '../../css/m/mqy5ypniu.css';
import '../../css/i/i6o_w3b-v.css';
import '../../css/v/v6jl6ipqy.css';
import '../../css/o/on6der_om.css';
import '../../css/n/n7ttjkbwe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ed20mnbov"/><path class="dcz9l7ass"/><path class="u5rbq8rlz"/><path class="azcza6bfo"/><path class="v1_ufab2c"/><path class="mqy5ypniu"/><path class="i6o_w3b-v"/><path class="v6jl6ipqy"/><path class="on6der_om"/><path class="n7ttjkbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:virus-20"} {...others} />);
}

export default Component;
