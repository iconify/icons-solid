import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t85k80b2z.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="t85k80b2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:comedy-mask-and-tragedy-mask"} {...others} />);
}

export default Component;
