import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7iw6bc4u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m7iw6bc4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:bowling-alley-15"} {...others} />);
}

export default Component;
