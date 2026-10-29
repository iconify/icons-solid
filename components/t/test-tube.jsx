import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oxujxybvl.css';
import '../../css/x/x91hgebnh.css';
import '../../css/x/xd60-huet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="oxujxybvl"/><path class="x91hgebnh"/><path class="xd60-huet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:test-tube"} {...others} />);
}

export default Component;
