import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/et60t3bjt.css';
import '../../css/s/st2vc_bfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="et60t3bjt"/><path class="st2vc_bfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-arrow-left"} {...others} />);
}

export default Component;
