import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx2-hcb5o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tx2-hcb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:podcast-index-dark"} {...others} />);
}

export default Component;
