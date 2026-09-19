import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_93su88i.css';
import '../../css/v/viznwcc0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_93su88i"/><path class="viznwcc0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-image-add"} {...others} />);
}

export default Component;
