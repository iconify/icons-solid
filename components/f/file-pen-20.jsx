import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs6rvfdlb.css';
import '../../css/e/ea83p6byy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xs6rvfdlb"/><path class="ea83p6byy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-pen-20"} {...others} />);
}

export default Component;
