import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d50lcuh7w.css';
import '../../css/u/uosdk-aax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d50lcuh7w"/><path class="uosdk-aax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clock-arrow-down"} {...others} />);
}

export default Component;
