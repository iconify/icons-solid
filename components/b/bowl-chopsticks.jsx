import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kntl17b-w.css';
import '../../css/i/iaaombc7o.css';
import '../../css/s/sr1jcbcrc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kntl17b-w"/><ellipse class="iaaombc7o"/><path class="sr1jcbcrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bowl-chopsticks"} {...others} />);
}

export default Component;
