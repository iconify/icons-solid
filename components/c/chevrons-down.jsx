import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1yxuplvk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o1yxuplvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:chevrons-down"} {...others} />);
}

export default Component;
