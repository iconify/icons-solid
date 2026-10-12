import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzi4bo-8z.css';
import '../../css/s/seg7ew6ql.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fzi4bo-8z"/><path class="seg7ew6ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:image-fill-20"} {...others} />);
}

export default Component;
