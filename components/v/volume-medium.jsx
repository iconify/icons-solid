import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq0b-nbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cq0b-nbsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:volume-medium"} {...others} />);
}

export default Component;
