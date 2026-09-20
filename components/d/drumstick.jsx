import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/guo4a44jv.css';
import '../../css/u/ujlgpbbyg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="guo4a44jv"/><path class="ujlgpbbyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:drumstick"} {...others} />);
}

export default Component;
