import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o024t7blj.css';
import '../../css/u/uzm9126hk.css';
import '../../css/q/qx-40pbsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o024t7blj"/><path class="uzm9126hk"/><path class="qx-40pbsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:dog"} {...others} />);
}

export default Component;
