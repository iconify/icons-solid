import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1kt5xcuf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p1kt5xcuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clock-fill-16"} {...others} />);
}

export default Component;
