import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qjavnub5p.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/p/p7ygyecjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qjavnub5p"/><circle class="shu3xdl9q"/><path class="p7ygyecjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:circle-letter-a"} {...others} />);
}

export default Component;
