import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zsf9f-b0s.css';
import '../../css/a/apsfa-b9n.css';
import '../../css/m/m-v6wcb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zsf9f-b0s"/><path class="apsfa-b9n"/><path class="m-v6wcb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:test-tube"} {...others} />);
}

export default Component;
