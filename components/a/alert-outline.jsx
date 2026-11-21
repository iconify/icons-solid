import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_6t34bzh.css';
import '../../css/x/x-ff3h11f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d_6t34bzh"/><circle class="x-ff3h11f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:alert-outline"} {...others} />);
}

export default Component;
