import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryaeftb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ryaeftb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-terminal-asterisk-sharp-fill"} {...others} />);
}

export default Component;
