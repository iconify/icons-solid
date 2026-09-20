import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lm1qn4__m.css';
import '../../css/z/z1-4sdbgn.css';
import '../../css/g/gmocnou7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="lm1qn4__m"/><rect class="z1-4sdbgn"/><path class="gmocnou7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:send-to-back"} {...others} />);
}

export default Component;
