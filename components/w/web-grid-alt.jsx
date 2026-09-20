import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5kx_xpqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i5kx_xpqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:web-grid-alt"} {...others} />);
}

export default Component;
