import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i75-_3t5k.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="i75-_3t5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:volume-medium"} {...others} />);
}

export default Component;
