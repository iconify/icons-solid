import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ok4_19xwb.css';
import '../../css/t/tcjvbpb5r.css';
import '../../css/l/lo-bdo53p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ok4_19xwb"/><path class="tcjvbpb5r wm-a"/><path class="lo-bdo53p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gamepad-duo"} {...others} />);
}

export default Component;
