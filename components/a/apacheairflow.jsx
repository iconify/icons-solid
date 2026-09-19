import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqdx2eb9s.css';
import '../../css/r/rl3jt7bei.css';
import '../../css/x/xpdx163qj.css';
import '../../css/s/s7s5cybow.css';
import '../../css/l/lpidr29by.css';
import '../../css/q/qugbkgbza.css';
import '../../css/d/dfbjuqlpe.css';
import '../../css/m/mhmit0iox.css';
import '../../css/a/a50-tubva.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dqdx2eb9s"/><path class="rl3jt7bei"/><path class="xpdx163qj"/><path class="s7s5cybow"/><path class="lpidr29by"/><path class="qugbkgbza"/><path class="dfbjuqlpe"/><path class="mhmit0iox"/><circle class="a50-tubva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:apacheairflow"} {...others} />);
}

export default Component;
