import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdr4_oh2f.css';
import '../../css/k/kep5dhb8s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bdr4_oh2f"/><path class="kep5dhb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adobe-illustrator"} {...others} />);
}

export default Component;
