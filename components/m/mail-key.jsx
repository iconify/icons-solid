import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k1--xxqip.css';
import '../../css/d/dfx0v2ykl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k1--xxqip"/><path class="dfx0v2ykl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-key"} {...others} />);
}

export default Component;
