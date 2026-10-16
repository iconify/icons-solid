import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-3_n6vyt.css';
import '../../css/x/x2br98bbe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b-3_n6vyt"/><path class="x2br98bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chisel-48"} {...others} />);
}

export default Component;
