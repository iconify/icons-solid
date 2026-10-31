import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8s2n6y0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f8s2n6y0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:qr-code-round"} {...others} />);
}

export default Component;
