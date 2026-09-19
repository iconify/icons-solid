import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2cy3dh3i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j2cy3dh3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:emoji-neutral-fill"} {...others} />);
}

export default Component;
