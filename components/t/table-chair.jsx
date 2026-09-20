import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu7afbcqm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fu7afbcqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:table-chair"} {...others} />);
}

export default Component;
