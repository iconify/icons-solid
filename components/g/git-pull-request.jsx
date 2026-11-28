import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jsuc-q3of.css';
import '../../css/i/i6g3-645g.css';
import '../../css/x/xfw_f4bet.css';
import '../../css/n/n2o72-b4r.css';
import '../../css/f/fu2lj5bnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jsuc-q3of"/><path class="i6g3-645g"/><path class="xfw_f4bet"/><path class="n2o72-b4r"/><path class="fu2lj5bnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:git-pull-request"} {...others} />);
}

export default Component;
