import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpbtlo3gr.css';
import '../../css/m/mqpx2x9bg.css';
import '../../css/o/omvd1c9yy.css';
import '../../css/w/w0z01g2cg.css';
import '../../css/m/m94q-dbte.css';

const viewBox = {"width":370.5,"height":362,"left":-5.38,"top":-1.13};
const content = `<path class="wpbtlo3gr"/><path class="mqpx2x9bg"/><path class="omvd1c9yy"/><path class="w0z01g2cg"/><path class="m94q-dbte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cri-o-light"} {...others} />);
}

export default Component;
