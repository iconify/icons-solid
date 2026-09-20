import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aj-43bcmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aj-43bcmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:vector-bezier-line"} {...others} />);
}

export default Component;
