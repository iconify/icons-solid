import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dillvx__w.css';
import '../../css/l/lefsu0b6s.css';
import '../../css/a/ang3hpb4r.css';
import '../../css/q/qrwfd8ber.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="dillvx__w"/><path class="lefsu0b6s wm-a"/><path class="ang3hpb4r"/><path class="qrwfd8ber wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:golf-duo"} {...others} />);
}

export default Component;
