import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtl_pwb1c.css';
import '../../css/b/bp9bjib7a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xtl_pwb1c"/><path class="bp9bjib7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:voice"} {...others} />);
}

export default Component;
