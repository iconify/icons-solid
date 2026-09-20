import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnlh_2gfq.css';
import '../../css/u/uqv04wb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mnlh_2gfq"/><path class="uqv04wb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:crowd"} {...others} />);
}

export default Component;
