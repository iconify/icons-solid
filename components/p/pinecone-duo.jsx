import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x70qm6b1c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r0b91xnmk.css';
import '../../css/s/s4e00vcxg.css';
import '../../css/a/amvtuxlau.css';
import '../../css/i/ioasb8b3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary x70qm6b1c"/><g class="dt0cm9dhy primary"><path class="r0b91xnmk"/><path class="s4e00vcxg"/><path class="amvtuxlau"/><path class="ioasb8b3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pinecone-duo"} {...others} />);
}

export default Component;
