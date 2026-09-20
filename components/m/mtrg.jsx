import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx2t3vb9s.css';
import '../../css/q/qr0d49tfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lx2t3vb9s"/><path class="qr0d49tfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mtrg"} {...others} />);
}

export default Component;
