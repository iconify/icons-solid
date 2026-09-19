import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlibpwbcq.css';
import '../../css/z/z0_3rqbiy.css';
import '../../css/h/hm6g4h_9h.css';
import '../../css/h/hfp3rvbzb.css';
import '../../css/s/slpq6x9ya.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vlibpwbcq"/><path class="z0_3rqbiy"/><path class="hm6g4h_9h"/><path class="hfp3rvbzb"/><path class="slpq6x9ya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ribbon-a"} {...others} />);
}

export default Component;
