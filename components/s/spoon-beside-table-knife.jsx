import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le02kybtb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="le02kybtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:spoon-beside-table-knife"} {...others} />);
}

export default Component;
