import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laa7w7bas.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="laa7w7bas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:facebook-oval"} {...others} />);
}

export default Component;
