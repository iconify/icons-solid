import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfjhs7b0s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sfjhs7b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:africa-and-madagascar"} {...others} />);
}

export default Component;
