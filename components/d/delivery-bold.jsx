import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng9-olbui.css';
import '../../css/s/s8d1qvbbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ng9-olbui"/><path class="s8d1qvbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:delivery-bold"} {...others} />);
}

export default Component;
