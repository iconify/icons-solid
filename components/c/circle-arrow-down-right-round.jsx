import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9nh01drz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o9nh01drz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-arrow-down-right-round"} {...others} />);
}

export default Component;
