import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u06e5gx7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u06e5gx7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:send-horizontal"} {...others} />);
}

export default Component;
