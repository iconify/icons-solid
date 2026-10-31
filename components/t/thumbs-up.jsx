import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nbrr5edha.css';
import '../../css/w/w_392wb-k.css';
import '../../css/r/r2-mckgxj.css';
import '../../css/u/uczgk3bsv.css';
import '../../css/o/ogq2nibyg.css';
import '../../css/t/toam04u9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nbrr5edha wm-shadow"/><path class="w_392wb-k"/><path class="r2-mckgxj"/><path class="uczgk3bsv"/><path class="ogq2nibyg"/><path class="toam04u9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:thumbs-up"} {...others} />);
}

export default Component;
