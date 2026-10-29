import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le1owpwna.css';
import '../../css/m/mj0qwqbjq.css';
import '../../css/g/g2nzm8bjk.css';
import '../../css/d/d4c3_8vfk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="le1owpwna wm-k"/><path class="mj0qwqbjq wm-k"/><path class="g2nzm8bjk wm-a"/><path class="d4c3_8vfk wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chevrons-down"} {...others} />);
}

export default Component;
