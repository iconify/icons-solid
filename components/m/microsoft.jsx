import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1ca1obpz.css';
import '../../css/m/m864ajb-j.css';
import '../../css/e/el-zljbja.css';
import '../../css/x/xi407sbwr.css';
import '../../css/e/ed3wb03hq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u1ca1obpz"/><path class="m864ajb-j"/><path class="el-zljbja"/><path class="xi407sbwr"/><path class="ed3wb03hq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft"} {...others} />);
}

export default Component;
