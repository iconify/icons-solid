import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k43bmzbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k43bmzbdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:information-desk-people"} {...others} />);
}

export default Component;
