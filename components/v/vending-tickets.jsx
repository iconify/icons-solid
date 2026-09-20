import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot3vn1bmt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ot3vn1bmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:vending-tickets"} {...others} />);
}

export default Component;
