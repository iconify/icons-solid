import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0tmkpb-w.css';
import '../../css/u/u_fqzdbrt.css';

const viewBox = {"width":12,"height":12};
const content = `<rect class="g0tmkpb-w"/><path class="u_fqzdbrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:mobile-phone-stroke-12"} {...others} />);
}

export default Component;
