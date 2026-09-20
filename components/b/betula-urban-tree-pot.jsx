import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecf22k6ia.css';
import '../../css/k/ke0zg7b_d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ecf22k6ia"/><path class="ke0zg7b_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:betula-urban-tree-pot"} {...others} />);
}

export default Component;
