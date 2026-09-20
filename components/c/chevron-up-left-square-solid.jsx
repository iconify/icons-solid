import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc9m0jmpy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gc9m0jmpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chevron-up-left-square-solid"} {...others} />);
}

export default Component;
