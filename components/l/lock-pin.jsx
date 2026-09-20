import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/szt7b3b5e.css';
import '../../css/e/e_isedc2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="szt7b3b5e"/><path class="e_isedc2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-pin"} {...others} />);
}

export default Component;
