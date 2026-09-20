import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nevv_l36w.css';
import '../../css/g/gtg8rbctr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nevv_l36w"/><path class="gtg8rbctr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frappe-hr"} {...others} />);
}

export default Component;
