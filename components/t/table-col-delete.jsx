import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqp9l5bag.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tqp9l5bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:table-col-delete"} {...others} />);
}

export default Component;
