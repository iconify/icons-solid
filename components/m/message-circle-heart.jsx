import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s3m46nx7n.css';
import '../../css/c/cyme96bom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s3m46nx7n"/><path class="cyme96bom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:message-circle-heart"} {...others} />);
}

export default Component;
