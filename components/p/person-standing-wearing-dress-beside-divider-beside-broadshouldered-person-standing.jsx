import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx7io3l3i.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vx7io3l3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-standing-wearing-dress-beside-divider-beside-broadshouldered-person-standing"} {...others} />);
}

export default Component;
