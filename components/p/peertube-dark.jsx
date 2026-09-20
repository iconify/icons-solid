import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b98gg_91s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b98gg_91s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:peertube-dark"} {...others} />);
}

export default Component;
