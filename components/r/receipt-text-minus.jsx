import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpc5t2beq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jpc5t2beq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:receipt-text-minus"} {...others} />);
}

export default Component;
