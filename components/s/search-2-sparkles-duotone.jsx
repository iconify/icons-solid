import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uuuk_76_k.css';
import '../../css/e/ejbnambnw.css';
import '../../css/r/rdkkb3etx.css';
import '../../css/n/nmtqstoyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uuuk_76_k"/><path class="ejbnambnw"/><path class="rdkkb3etx"/><path class="nmtqstoyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-2-sparkles-duotone"} {...others} />);
}

export default Component;
