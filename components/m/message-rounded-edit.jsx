import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3qu9vwbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t3qu9vwbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:message-rounded-edit"} {...others} />);
}

export default Component;
