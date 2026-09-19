import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5_ov5lgh.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="c5_ov5lgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:paint-bucket"} {...others} />);
}

export default Component;
