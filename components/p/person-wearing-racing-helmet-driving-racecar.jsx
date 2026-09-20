import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq14dwolm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qq14dwolm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-wearing-racing-helmet-driving-racecar"} {...others} />);
}

export default Component;
