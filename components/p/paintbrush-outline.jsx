import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5r6won4c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k5r6won4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:paintbrush-outline"} {...others} />);
}

export default Component;
