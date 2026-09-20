import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bos3_bcyf.css';
import '../../css/r/r2te244gm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bos3_bcyf"/><path class="r2te244gm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:zoom-question"} {...others} />);
}

export default Component;
