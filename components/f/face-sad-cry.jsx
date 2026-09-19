import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv01ljeqp.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="jv01ljeqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:face-sad-cry"} {...others} />);
}

export default Component;
