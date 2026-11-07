import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8d1qvbbx.css';
import '../../css/j/jtg24db_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s8d1qvbbx"/><path class="jtg24db_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:delivery-bold-duotone"} {...others} />);
}

export default Component;
