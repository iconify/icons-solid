import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua6jnvbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="ua6jnvbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rectangle-horizontal"} {...others} />);
}

export default Component;
