import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyfjpwsme.css';
import '../../css/d/d_33tyskh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oyfjpwsme wm-k"/><path class="d_33tyskh wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:corner-down-left"} {...others} />);
}

export default Component;
