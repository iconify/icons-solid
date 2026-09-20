import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mzs17083s.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/n/nf5tjgbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mzs17083s"/><circle class="shu3xdl9q"/><path class="nf5tjgbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:baseball"} {...others} />);
}

export default Component;
