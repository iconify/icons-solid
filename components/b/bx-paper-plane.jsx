import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfd5t0bsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfd5t0bsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-paper-plane"} {...others} />);
}

export default Component;
