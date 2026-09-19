import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7fum4b5a.css';
import '../../css/k/kv4jnr7fz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d7fum4b5a"/><path class="kv4jnr7fz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-shield-x"} {...others} />);
}

export default Component;
