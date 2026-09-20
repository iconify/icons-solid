import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tvje48b7u.css';
import '../../css/n/n-s3_4imp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tvje48b7u"/><circle class="n-s3_4imp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:search"} {...others} />);
}

export default Component;
