import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxeajxbtq.css';
import '../../css/a/a_k81umyt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mxeajxbtq"/><path class="a_k81umyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:anchor-center-middle-16"} {...others} />);
}

export default Component;
