import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqc9t5egf.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="zqc9t5egf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:tablet"} {...others} />);
}

export default Component;
