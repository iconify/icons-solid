import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh-ld3xeb.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="uh-ld3xeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:lineicons-alt"} {...others} />);
}

export default Component;
