import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/guntzbbhs.css';
import '../../css/t/tay_8uvgz.css';
import '../../css/o/o8yfolhog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="guntzbbhs"/><path class="tay_8uvgz"/><path class="o8yfolhog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo"} {...others} />);
}

export default Component;
