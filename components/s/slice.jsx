import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfqd_harf.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="cfqd_harf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:slice"} {...others} />);
}

export default Component;
