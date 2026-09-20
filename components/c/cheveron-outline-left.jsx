import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um-ib7b-d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="um-ib7b-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:cheveron-outline-left"} {...others} />);
}

export default Component;
