import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxg55ebbo.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="uxg55ebbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circledelete"} {...others} />);
}

export default Component;
