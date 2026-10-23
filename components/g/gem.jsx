import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vmyvabc8v.css';
import '../../css/k/kkfj2_b5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vmyvabc8v"/><path class="kkfj2_b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:gem"} {...others} />);
}

export default Component;
