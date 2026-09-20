import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wug2whbde.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="wug2whbde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nature-ecology-clover-plant-leaf-tree-flower-luck-lucky"} {...others} />);
}

export default Component;
