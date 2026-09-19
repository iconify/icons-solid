import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kapf5_9cq.css';
import '../../css/b/b0arhbfij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kapf5_9cq"/><path class="b0arhbfij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:home"} {...others} />);
}

export default Component;
