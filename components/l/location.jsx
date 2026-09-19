import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moujm4bxk.css';
import '../../css/y/yoimegbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="moujm4bxk"/><path class="yoimegbqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:location"} {...others} />);
}

export default Component;
