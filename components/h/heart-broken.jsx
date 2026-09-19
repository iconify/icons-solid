import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lplg4im9c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lplg4im9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:heart-broken"} {...others} />);
}

export default Component;
