import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kw37j6fhx.css';
import '../../css/o/odnmdzi_x.css';
import '../../css/d/dorpla9vi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kw37j6fhx"/><path class="odnmdzi_x"/><path class="dorpla9vi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:route-duo"} {...others} />);
}

export default Component;
