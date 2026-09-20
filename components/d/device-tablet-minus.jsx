import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tgh1zgb-o.css';
import '../../css/p/pymxscc3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tgh1zgb-o"/><path class="pymxscc3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-minus"} {...others} />);
}

export default Component;
