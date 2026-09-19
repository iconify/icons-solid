import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krpr_ibvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="krpr_ibvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:lock-open"} {...others} />);
}

export default Component;
