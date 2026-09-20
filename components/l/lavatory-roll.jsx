import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyw1evzrj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kyw1evzrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:lavatory-roll"} {...others} />);
}

export default Component;
