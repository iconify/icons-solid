import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1_8iubmh.css';
import '../../css/c/cl2ahfl2g.css';
import '../../css/n/nc-y7w9wa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n1_8iubmh"/><path class="cl2ahfl2g"/><path class="nc-y7w9wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:litellm"} {...others} />);
}

export default Component;
