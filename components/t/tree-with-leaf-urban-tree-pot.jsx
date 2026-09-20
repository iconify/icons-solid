import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5_bhwb0y.css';
import '../../css/k/ke0zg7b_d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j5_bhwb0y"/><path class="ke0zg7b_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:tree-with-leaf-urban-tree-pot"} {...others} />);
}

export default Component;
