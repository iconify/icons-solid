import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhkq8cbdm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bhkq8cbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pixel-gasoline-pump"} {...others} />);
}

export default Component;
