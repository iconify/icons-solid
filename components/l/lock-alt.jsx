import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inttxhblt.css';
import '../../css/r/rixxe_b4n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="inttxhblt"/><path class="rixxe_b4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:lock-alt"} {...others} />);
}

export default Component;
