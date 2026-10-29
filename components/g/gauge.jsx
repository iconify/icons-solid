import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok3x2mblu.css';
import '../../css/n/nzkawkbvm.css';
import '../../css/b/b0d7m1b7l.css';
import '../../css/h/hhi9yxy6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ok3x2mblu wm-k"/><path class="nzkawkbvm wm-k"/><path class="b0d7m1b7l wm-k"/><path class="hhi9yxy6w wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:gauge"} {...others} />);
}

export default Component;
