import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmx29iyrb.css';
import '../../css/g/g-mtc6bxp.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vmx29iyrb"/><path class="g-mtc6bxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:items-tree-16"} {...others} />);
}

export default Component;
