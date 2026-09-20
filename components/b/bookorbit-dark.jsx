import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prnpfqb_v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="prnpfqb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bookorbit-dark"} {...others} />);
}

export default Component;
