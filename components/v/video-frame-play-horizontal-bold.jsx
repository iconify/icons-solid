import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7n45w57a.css';
import '../../css/m/mi4bhhbbl.css';
import '../../css/b/bxxeokx_j.css';
import '../../css/f/fwe-t-b8n.css';
import '../../css/l/l9pjb8b5v.css';
import '../../css/m/mr90_nsfj.css';
import '../../css/m/ml4josikz.css';
import '../../css/m/m8gfm2b1a.css';
import '../../css/u/u0mj9spsz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t7n45w57a"/><path class="mi4bhhbbl"/><path clip-rule="evenodd" class="bxxeokx_j"/><path class="fwe-t-b8n"/><path class="l9pjb8b5v"/><path class="mr90_nsfj"/><path class="ml4josikz"/><path class="m8gfm2b1a"/><path class="u0mj9spsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-play-horizontal-bold"} {...others} />);
}

export default Component;
