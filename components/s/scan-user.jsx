import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jpfl0_i4c.css';
import '../../css/u/urz-4cihd.css';
import '../../css/k/kmt8x7ffq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jpfl0_i4c"/><circle class="urz-4cihd"/><path class="kmt8x7ffq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:scan-user"} {...others} />);
}

export default Component;
