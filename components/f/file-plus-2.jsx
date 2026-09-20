import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xugjf_9bj.css';
import '../../css/t/t42uijb8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xugjf_9bj"/><path class="t42uijb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-plus-2"} {...others} />);
}

export default Component;
