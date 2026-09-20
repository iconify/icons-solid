import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9-e7g7ml.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="l9-e7g7ml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:unlink"} {...others} />);
}

export default Component;
