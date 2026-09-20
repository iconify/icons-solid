import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xanb4ubum.css';
import '../../css/n/n-s3_4imp.css';
import '../../css/n/n3murebba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xanb4ubum"/><circle class="n-s3_4imp"/><path class="n3murebba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:search-check"} {...others} />);
}

export default Component;
