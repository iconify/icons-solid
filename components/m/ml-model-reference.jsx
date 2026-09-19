import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtnvolzvt.css';
import '../../css/x/xd2sz9b9o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mtnvolzvt"/><path class="xd2sz9b9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ml-model-reference"} {...others} />);
}

export default Component;
