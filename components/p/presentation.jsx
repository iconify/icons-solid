import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj8ii1bcd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qj8ii1bcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:presentation"} {...others} />);
}

export default Component;
