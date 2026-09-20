import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr6r9tbai.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jr6r9tbai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:unlocked-check"} {...others} />);
}

export default Component;
