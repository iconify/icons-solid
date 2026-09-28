import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_2_1m9-s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c_2_1m9-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:spoon-beside-table-knife-in-gable-roofed-shelter"} {...others} />);
}

export default Component;
