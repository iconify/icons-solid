import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rn_bmmbhp.css';
import '../../css/q/qedvzww7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rn_bmmbhp"/><path class="qedvzww7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tags-duocolor-round"} {...others} />);
}

export default Component;
