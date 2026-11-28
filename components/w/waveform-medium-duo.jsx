import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a-1148mpe.css';
import '../../css/b/b-a73ib2o.css';
import '../../css/t/tjn3hjv3h.css';
import '../../css/b/bhfdfiahb.css';
import '../../css/r/r___6ybhc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a-1148mpe"/><path class="b-a73ib2o"/><path class="tjn3hjv3h"/><path class="bhfdfiahb"/><path class="r___6ybhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:waveform-medium-duo"} {...others} />);
}

export default Component;
