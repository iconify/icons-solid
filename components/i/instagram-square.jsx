import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j88t_ybxv.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="j88t_ybxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:instagram-square"} {...others} />);
}

export default Component;
