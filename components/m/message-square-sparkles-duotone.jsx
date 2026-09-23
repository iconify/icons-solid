import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ej-9rrbto.css';
import '../../css/o/o0b4ob_tu.css';
import '../../css/u/uu0t6t4ek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ej-9rrbto"/><path class="o0b4ob_tu"/><path class="uu0t6t4ek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-square-sparkles-duotone"} {...others} />);
}

export default Component;
