import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8m9zlofw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="x8m9zlofw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:triangle-right-outline"} {...others} />);
}

export default Component;
