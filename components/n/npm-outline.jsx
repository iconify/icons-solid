import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk0r7efoy.css';
import '../../css/e/e1p3xu3iv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dk0r7efoy"/><path class="e1p3xu3iv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:npm-outline"} {...others} />);
}

export default Component;
