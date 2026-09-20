import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rkwak6wml.css';
import '../../css/n/n-s3_4imp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rkwak6wml"/><circle class="n-s3_4imp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:search-code"} {...others} />);
}

export default Component;
