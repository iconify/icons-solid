import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8_c70p_x.css';
import '../../css/f/ftery2lwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g8_c70p_x wm-k"/><path class="ftery2lwy wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:skip-back"} {...others} />);
}

export default Component;
