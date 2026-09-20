import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj5h39unz.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="cj5h39unz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:briefcase"} {...others} />);
}

export default Component;
