import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqvr4v5ky.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tqvr4v5ky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:bitbucket"} {...others} />);
}

export default Component;
