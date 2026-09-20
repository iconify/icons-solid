import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yagvpk3ew.css';
import '../../css/k/k5ixoab-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yagvpk3ew"/><path class="k5ixoab-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ufo-line"} {...others} />);
}

export default Component;
