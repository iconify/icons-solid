import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crqpn7b-k.css';
import '../../css/c/c003gc-5c.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="crqpn7b-k"/><path class="c003gc-5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:unknown"} {...others} />);
}

export default Component;
