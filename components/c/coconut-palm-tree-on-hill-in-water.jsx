import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq89bn_un.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qq89bn_un"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:coconut-palm-tree-on-hill-in-water"} {...others} />);
}

export default Component;
