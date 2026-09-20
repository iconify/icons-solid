import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b40zu7uku.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b40zu7uku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:clipboard-plus-outline"} {...others} />);
}

export default Component;
