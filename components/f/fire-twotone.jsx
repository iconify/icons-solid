import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qexpvkbfn.css';
import '../../css/n/nz1sgacqa.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qexpvkbfn"/><path class="nz1sgacqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:fire-twotone"} {...others} />);
}

export default Component;
