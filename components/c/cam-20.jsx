import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dom_6oycu.css';
import '../../css/k/k5lxwxbxz.css';
import '../../css/h/h284w7bzf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dom_6oycu"/><path class="k5lxwxbxz"/><path class="h284w7bzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cam-20"} {...others} />);
}

export default Component;
