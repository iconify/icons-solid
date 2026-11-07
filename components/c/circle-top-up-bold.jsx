import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejn_m3b5w.css';
import '../../css/x/x-i7oifjp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejn_m3b5w"/><path class="x-i7oifjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-top-up-bold"} {...others} />);
}

export default Component;
