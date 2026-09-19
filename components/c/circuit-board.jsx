import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn_6ly9xj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tn_6ly9xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:circuit-board"} {...others} />);
}

export default Component;
