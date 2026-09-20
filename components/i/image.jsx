import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9t5p3b5c.css';
import '../../css/o/ohfe1ob8s.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="p9t5p3b5c"/><path class="ohfe1ob8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:image"} {...others} />);
}

export default Component;
