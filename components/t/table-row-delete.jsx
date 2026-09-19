import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sp_j_6pys.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sp_j_6pys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:table-row-delete"} {...others} />);
}

export default Component;
