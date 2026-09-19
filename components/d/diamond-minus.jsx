import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob0g1dvlc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ob0g1dvlc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:diamond-minus"} {...others} />);
}

export default Component;
