import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyzs50b8b.css';
import '../../css/v/vceoc3bqc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fyzs50b8b"/><path class="vceoc3bqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:leaf-20"} {...others} />);
}

export default Component;
