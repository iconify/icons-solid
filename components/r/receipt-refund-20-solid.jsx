import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5comzb_q.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="o5comzb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:receipt-refund-20-solid"} {...others} />);
}

export default Component;
