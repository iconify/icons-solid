import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3qj7cccl.css';
import '../../css/q/qwda32bbf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a3qj7cccl"/><path class="qwda32bbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:paste"} {...others} />);
}

export default Component;
