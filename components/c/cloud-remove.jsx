import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_q2p-i6z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v_q2p-i6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:cloud-remove"} {...others} />);
}

export default Component;
