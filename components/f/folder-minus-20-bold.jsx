import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u47_4yu8m.css';
import '../../css/o/oiw__zvyr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u47_4yu8m"/><path class="oiw__zvyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-minus-20-bold"} {...others} />);
}

export default Component;
