import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6jb2xjee.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q6jb2xjee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tree-pine"} {...others} />);
}

export default Component;
