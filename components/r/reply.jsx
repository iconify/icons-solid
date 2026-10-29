import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl6ew7bys.css';
import '../../css/d/dt926jbqr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pl6ew7bys wm-k"/><path class="dt926jbqr wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:reply"} {...others} />);
}

export default Component;
