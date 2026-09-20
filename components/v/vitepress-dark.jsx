import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh-i5vb3h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bh-i5vb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vitepress-dark"} {...others} />);
}

export default Component;
