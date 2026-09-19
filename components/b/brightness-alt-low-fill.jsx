import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgfo6gb0h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bgfo6gb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:brightness-alt-low-fill"} {...others} />);
}

export default Component;
