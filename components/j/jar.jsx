import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pv84n0bii.css';
import '../../css/w/w8bgqeoji.css';
import '../../css/a/av4wpcl1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pv84n0bii"/><rect class="w8bgqeoji"/><path class="av4wpcl1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:jar"} {...others} />);
}

export default Component;
