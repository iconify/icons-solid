import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n-s3_4imp.css';
import '../../css/m/mg0ed6bwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="n-s3_4imp"/><path class="mg0ed6bwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:zoom-in"} {...others} />);
}

export default Component;
