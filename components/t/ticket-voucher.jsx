import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct4igk9uo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ct4igk9uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:ticket-voucher"} {...others} />);
}

export default Component;
