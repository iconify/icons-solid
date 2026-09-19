import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_e9v2bir.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="b_e9v2bir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:eye-slash"} {...others} />);
}

export default Component;
