import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gif58rbjy.css';
import '../../css/i/im529ibwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gif58rbjy"/><path class="im529ibwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:send-horizontal-sparkles-fill"} {...others} />);
}

export default Component;
