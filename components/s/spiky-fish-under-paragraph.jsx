import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_rqqg3ll.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b_rqqg3ll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:spiky-fish-under-paragraph"} {...others} />);
}

export default Component;
