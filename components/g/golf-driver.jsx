import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wcp3x94fp.css';
import '../../css/e/em7g-gbvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="wcp3x94fp"/><path class="em7g-gbvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:golf-driver"} {...others} />);
}

export default Component;
