import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd-qr9bww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nd-qr9bww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:basic-attention-token"} {...others} />);
}

export default Component;
