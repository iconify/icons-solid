import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7sprv35n.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="l7sprv35n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:hand-open"} {...others} />);
}

export default Component;
