import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acadc4zqf.css';
import '../../css/k/k9wblp0cn.css';
import '../../css/p/p4jr7vbhr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="acadc4zqf"/><path class="k9wblp0cn"/><path class="p4jr7vbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:list-tree-20"} {...others} />);
}

export default Component;
