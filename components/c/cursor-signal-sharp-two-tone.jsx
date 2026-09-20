import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lo9uc9ynl.css';
import '../../css/n/nel6rabuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="lo9uc9ynl"/><path class="nel6rabuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-signal-sharp-two-tone"} {...others} />);
}

export default Component;
