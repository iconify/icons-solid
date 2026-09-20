import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwdt2v70o.css';
import '../../css/k/kqe51pb_g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jwdt2v70o"/><path class="kqe51pb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:usps"} {...others} />);
}

export default Component;
