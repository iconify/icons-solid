import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4aws_orj.css';
import '../../css/l/l-h9c6bos.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q4aws_orj"/><path class="l-h9c6bos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:expansion-vessel-20"} {...others} />);
}

export default Component;
