import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwq_k-uvo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fwq_k-uvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:japan-historic"} {...others} />);
}

export default Component;
