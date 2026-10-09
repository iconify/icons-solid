import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3h-3_brx.css';
import '../../css/m/m4dy9ybsj.css';
import '../../css/h/hcrkhjb9z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c3h-3_brx"/><path class="m4dy9ybsj"/><path class="hcrkhjb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:school-20"} {...others} />);
}

export default Component;
