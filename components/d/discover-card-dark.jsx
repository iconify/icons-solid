import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_w0o_b6w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o_w0o_b6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:discover-card-dark"} {...others} />);
}

export default Component;
