import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzg7-ybcj.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="qzg7-ybcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pet-paw"} {...others} />);
}

export default Component;
