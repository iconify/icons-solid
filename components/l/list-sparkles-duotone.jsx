import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/snc70lbwe.css';
import '../../css/t/t82mss_so.css';
import '../../css/t/t6v_1pm6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="snc70lbwe"/><path class="t82mss_so"/><path class="t6v_1pm6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-sparkles-duotone"} {...others} />);
}

export default Component;
