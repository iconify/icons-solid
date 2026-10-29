import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h364t7brs.css';
import '../../css/i/i2z-fkbgx.css';
import '../../css/v/vbn0d_b5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h364t7brs wm-shadow"/><path class="i2z-fkbgx wm-k"/><path class="vbn0d_b5k wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chevron-up"} {...others} />);
}

export default Component;
