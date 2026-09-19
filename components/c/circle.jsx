import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amae8eb-m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="amae8eb-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:circle"} {...others} />);
}

export default Component;
