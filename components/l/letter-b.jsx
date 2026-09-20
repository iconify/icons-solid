import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li5e-nbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="li5e-nbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:letter-b"} {...others} />);
}

export default Component;
