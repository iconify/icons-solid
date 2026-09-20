import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax7qsac9k.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/aa_s1yj3r.css';
import '../../css/v/vvjrpccfk.css';
import '../../css/e/e-5705h8e.css';
import '../../css/t/ttrb60jrl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ax7qsac9k"/><g class="jn8qy4bru"><path class="aa_s1yj3r"/><path class="vvjrpccfk"/><path class="e-5705h8e"/><path class="ttrb60jrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:call-me-hand-light-skin-tone"} {...others} />);
}

export default Component;
