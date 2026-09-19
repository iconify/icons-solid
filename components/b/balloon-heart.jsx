import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/joh4lsb5o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="joh4lsb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:balloon-heart"} {...others} />);
}

export default Component;
