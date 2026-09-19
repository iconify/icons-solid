import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjyejd2yu.css';

const viewBox = {"width":1026,"height":769};
const content = `<path class="tjyejd2yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:glassesalt"} {...others} />);
}

export default Component;
