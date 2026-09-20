import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h13ufob8b.css';
import '../../css/x/x3l-v8wjx.css';

const viewBox = {"width":1550,"height":971};
const content = `<path class="h13ufob8b"/><path class="x3l-v8wjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:mondelez-international"} {...others} />);
}

export default Component;
