import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lf4_2ecrl.css';
import '../../css/y/yfg-5sbvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lf4_2ecrl"/><path class="yfg-5sbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:text-wrap"} {...others} />);
}

export default Component;
