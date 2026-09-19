import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w14ao9mev.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w14ao9mev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:stairs-up-arrow"} {...others} />);
}

export default Component;
