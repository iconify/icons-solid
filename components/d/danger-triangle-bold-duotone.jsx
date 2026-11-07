import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkvl0ybhw.css';
import '../../css/q/qosnnxx8l.css';
import '../../css/x/x41xvfi0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fkvl0ybhw"/><path class="qosnnxx8l"/><path class="x41xvfi0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:danger-triangle-bold-duotone"} {...others} />);
}

export default Component;
