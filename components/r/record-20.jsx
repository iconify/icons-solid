import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd9t-4b_w.css';
import '../../css/v/vixdv7vsx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pd9t-4b_w"/><path class="vixdv7vsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:record-20"} {...others} />);
}

export default Component;
