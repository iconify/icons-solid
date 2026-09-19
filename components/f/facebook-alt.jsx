import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq05dn0hj.css';

const viewBox = {"width":464,"height":488};
const content = `<path class="dq05dn0hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:facebook-alt"} {...others} />);
}

export default Component;
