import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qcs_7qqsg.css';
import '../../css/w/wrte12bjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="qcs_7qqsg"/><path class="wrte12bjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-round"} {...others} />);
}

export default Component;
