import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er3yn_rep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="er3yn_rep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:saudi-riyal"} {...others} />);
}

export default Component;
