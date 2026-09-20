import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nnzq1t7sf.css';
import '../../css/p/p9jpapbpu.css';
import '../../css/a/aj1zrsdaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nnzq1t7sf"/><path class="p9jpapbpu"/><path class="aj1zrsdaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cart-question"} {...others} />);
}

export default Component;
