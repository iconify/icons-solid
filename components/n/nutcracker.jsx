import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oh_l5zboi.css';
import '../../css/v/v75sa1w2n.css';
import '../../css/h/h2n_qzb7f.css';
import '../../css/v/vw14m8m2s.css';
import '../../css/r/r2uk4ib7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="oh_l5zboi"/><path class="v75sa1w2n wm-a"/><path class="h2n_qzb7f"/><path class="vw14m8m2s"/><path class="r2uk4ib7z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:nutcracker"} {...others} />);
}

export default Component;
