import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b24n32b6u.css';
import '../../css/j/jdj652_du.css';
import '../../css/m/m-d02bb8g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b24n32b6u"/><path class="jdj652_du"/><path class="m-d02bb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-tree-20-bold"} {...others} />);
}

export default Component;
