import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbv3kq73b.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xbv3kq73b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:gitlab-wordmark"} {...others} />);
}

export default Component;
