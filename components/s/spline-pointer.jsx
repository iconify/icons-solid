import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h8pt52bcc.css';
import '../../css/b/bopi9b9jn.css';
import '../../css/f/fxwnb7vgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h8pt52bcc"/><circle class="bopi9b9jn"/><circle class="fxwnb7vgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:spline-pointer"} {...others} />);
}

export default Component;
