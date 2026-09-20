import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjb6xsbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qjb6xsbdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:a-b-c"} {...others} />);
}

export default Component;
