import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qmnd073qv.css';
import '../../css/r/r5neqmb5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qmnd073qv"/><path class="r5neqmb5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:address-book"} {...others} />);
}

export default Component;
