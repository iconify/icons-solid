import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdr_w8b1f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gdr_w8b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-github-outline"} {...others} />);
}

export default Component;
