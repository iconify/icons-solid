import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v74zyk0ba.css';
import '../../css/v/vgeonubzr.css';
import '../../css/z/zux7u5m1t.css';
import '../../css/h/hn4i4s49q.css';
import '../../css/i/iye2bebhp.css';
import '../../css/s/s_ubhhqbq.css';
import '../../css/g/g230l041g.css';
import '../../css/m/mlgz-rbgq.css';
import '../../css/z/zkaqghopl.css';
import '../../css/s/shqyy0bfo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="v74zyk0ba"/><path class="vgeonubzr"/><path class="zux7u5m1t"/><path class="hn4i4s49q"/><path class="iye2bebhp"/><path class="s_ubhhqbq"/><path class="g230l041g"/><path class="mlgz-rbgq"/><path class="zkaqghopl"/><path class="shqyy0bfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:group-meeting-call"} {...others} />);
}

export default Component;
