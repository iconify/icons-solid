import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y65eu3bqf.css';
import '../../css/t/t457h_ism.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y65eu3bqf"/><path class="t457h_ism"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:school-off"} {...others} />);
}

export default Component;
