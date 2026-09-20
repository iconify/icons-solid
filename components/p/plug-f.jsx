import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfbmbcpyw.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-1.5};
const content = `<path class="dfbmbcpyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:plug-f"} {...others} />);
}

export default Component;
