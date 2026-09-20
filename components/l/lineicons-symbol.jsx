import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9a3omb3f.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="z9a3omb3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:lineicons-symbol"} {...others} />);
}

export default Component;
