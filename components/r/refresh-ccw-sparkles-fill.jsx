import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bofwktq-k.css';
import '../../css/m/mydrcyejk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bofwktq-k"/><path class="mydrcyejk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:refresh-ccw-sparkles-fill"} {...others} />);
}

export default Component;
