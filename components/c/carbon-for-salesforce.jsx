import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3jsy69az.css';
import '../../css/h/h5js46x2e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b3jsy69az"/><path class="h5js46x2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:carbon-for-salesforce"} {...others} />);
}

export default Component;
