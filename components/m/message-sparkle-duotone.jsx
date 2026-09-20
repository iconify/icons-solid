import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/okb-fxb0v.css';
import '../../css/a/aujoe3b6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="okb-fxb0v"/><path class="aujoe3b6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-sparkle-duotone"} {...others} />);
}

export default Component;
