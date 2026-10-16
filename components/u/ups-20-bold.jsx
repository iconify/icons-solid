import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs-k6d3fm.css';
import '../../css/e/elvzx7mnc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xs-k6d3fm"/><path class="elvzx7mnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ups-20-bold"} {...others} />);
}

export default Component;
