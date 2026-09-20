import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtuihc3of.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wtuihc3of"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-wind-surfing-on-water"} {...others} />);
}

export default Component;
