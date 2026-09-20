import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5d0gpb9e.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="k5d0gpb9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:online-medical-call-service"} {...others} />);
}

export default Component;
