import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur6ybxbzg.css';
import '../../css/p/p9hlq3xpn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ur6ybxbzg"/><circle class="p9hlq3xpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:alert-warning-stroke-16"} {...others} />);
}

export default Component;
