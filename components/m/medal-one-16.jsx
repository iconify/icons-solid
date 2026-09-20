import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldffh34lq.css';
import '../../css/x/x3ezi_wmn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ldffh34lq"/><path clip-rule="evenodd" class="x3ezi_wmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:medal-one-16"} {...others} />);
}

export default Component;
