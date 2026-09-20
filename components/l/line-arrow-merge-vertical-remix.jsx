import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk4uyrk5w.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="xk4uyrk5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:line-arrow-merge-vertical-remix"} {...others} />);
}

export default Component;
