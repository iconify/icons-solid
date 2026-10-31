import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iz8z_7b0m.css';
import '../../css/c/cxraxmb0q.css';
import '../../css/x/x_0hs-bvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iz8z_7b0m"/><path class="cxraxmb0q"/><path class="x_0hs-bvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:bug"} {...others} />);
}

export default Component;
