import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3-25i8ag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h3-25i8ag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alert-circle-success-outline"} {...others} />);
}

export default Component;
